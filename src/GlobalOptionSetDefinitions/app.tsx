import React, { useEffect, useState } from "react"
import { useMsal, useAccount, IMsalContext } from "@azure/msal-react"

import {  
    scopes as webapiScopes, 
    prepareWebApiRequest,
    GlobalOptionSetDefinitions,
} from '../webapi';
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Stack } from "@fluentui/react/lib/Stack";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { Text } from "@fluentui/react/lib/Text";
import { List } from "@fluentui/react/lib/List";
import { DetailsList, DetailsListLayoutMode, IColumn, SelectionMode, Selection } from "@fluentui/react/lib/DetailsList";
import { ScrollablePane, ScrollbarVisibility } from "@fluentui/react/lib/ScrollablePane";

initializeIcons()

const EMPTY_RESULT = { value:[] }

type RenderAfterLogin = IMsalContext & { renderAfterLogin:( render:() => JSX.Element) => JSX.Element } 

const useRenderAfterLogin = ():RenderAfterLogin =>  {

    const msalContext = useMsal()

    return { 
        renderAfterLogin : ( render:() => JSX.Element) =>  { 
            if (msalContext.accounts.length > 0) {   
                return render()    
            } 
            else if (msalContext.inProgress === "login") {
                return <span>Login is currently in progress!</span>
            } else {
            return (
                <Stack horizontal>
                    <Text>There are currently no users signed in!</Text>
                    <PrimaryButton text="Login" onClick={() => msalContext.instance.loginPopup()} />
                </Stack>
                )
            }
    }, ...msalContext}

}


const _optionsColumns:IColumn[] = [
    { key:'label',name:'Label', minWidth:100, isResizable: true, 
        onRender: (item?:Xrm.Metadata.OptionMetadata) => 
                (<Text>{item?.Label.LocalizedLabels[0].Label}</Text>)
        
    },
    { key:'value',name:'Value',fieldName:'Value', minWidth:100, isResizable: false, data:'number' }, 
]

const sortCriteria = (a:GlobalOptionSetDefinitions.Metadata, b:GlobalOptionSetDefinitions.Metadata) => {
    const typeCompare = -(a.OptionSetType.localeCompare(b.OptionSetType))
    if( typeCompare == 0 )
        return a.Name.localeCompare(b.Name)
    return typeCompare
}
/**
 * 
 * @returns 
 */
export function App() {

    const { instance, accounts, renderAfterLogin } = useRenderAfterLogin()

    const account = useAccount(accounts[0] ?? {});
    const [result, setResult] = useState<Partial<GlobalOptionSetDefinitions.Response>>(EMPTY_RESULT);

    useEffect(() => {
        
        if (account) {
            instance.acquireTokenSilent({
                scopes: webapiScopes,
                account: account
            })
            .then( prepareWebApiRequest ) 
            .then( () => GlobalOptionSetDefinitions.Invoke() )
            .then( (values) => 
                setResult( { ...values, value:values.value.sort(sortCriteria)})
            )
            .catch( error => console.error(error))
            ;
        }
    }, [account?.localAccountId, instance]);



    const _onRenderCell = (item?: GlobalOptionSetDefinitions.Metadata, index?: number | undefined): JSX.Element => {
        return (
          <Stack styles={{ root: { maxWidth: 500 }}}>
              
              <Stack horizontal verticalAlign="center" tokens={{ childrenGap:20, padding: 5}}>
                <Text variant="xLargePlus">{item!.Name}</Text>
                <Text variant="xLarge">({item!.OptionSetType})</Text>
              </Stack>
              
            {  
            // <Text>{JSON.stringify(item!.Options, undefined, 2)}</Text> 
            }
              {item?.Options && item.Options.length > 0 &&
                <DetailsList
                    compact={true}
                    items={item?.Options ?? []}
                    columns={_optionsColumns}
                    layoutMode={DetailsListLayoutMode.justified}
                    selectionMode={SelectionMode.none}
                    isHeaderVisible={true}
                    />
              }

              
               
          </Stack>
        );
      };


    return renderAfterLogin( () => ( 
        <div>
            <List items={result.value!} onRenderCell={_onRenderCell} />            
        </div>
    ))
}