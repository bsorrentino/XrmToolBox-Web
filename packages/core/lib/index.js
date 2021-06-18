function e(e){return e&&e.__esModule?e.default:e}function t(e,t,i){Object.defineProperty(e,t,{get:i,enumerable:!0})}var i=e(require("xrm-webapi-client")),n=e(require("react")),o=require("@fluentui/react/lib/Text").Text,r=require("@fluentui/react/lib/Stack").Stack,a=require("@fluentui/react/lib/Button").PrimaryButton,l=require("@azure/msal-react"),s=l.useMsal,u=l.useAccount,p={};const c=new(0,require("@azure/msal-browser").PublicClientApplication)({auth:{clientId:"c43d3729-2e9c-4254-bd68-fbbe4a45301b",redirectUri:"http://localhost:1234"}});exports.PCA=c,t(p,"PCA",(function(){return c}));const b=()=>{const e=s();return{renderAfterLogin:t=>e.accounts.length>0?t():"login"===e.inProgress?n.createElement("span",null,"Login is currently in progress!"):n.createElement(r,{horizontal:!0},n.createElement(o,null,"There are currently no users signed in!"),n.createElement(a,{text:"Login",onClick:()=>e.instance.loginPopup()})),account:u(e.accounts[0]??{}),...e}};exports.useRenderAfterLogin=b,t(p,"useRenderAfterLogin",(function(){return b}));var m={};const g=["https://bsc-labs.crm.dynamics.com/user_impersonation"];exports.scopes=g,t(m,"scopes",(function(){return g}));const R=e=>{let t=i;t.ApiVersion="9.1",t.Token=e.accessToken,t.ClientUrl="https://bsc-labs.crm.dynamics.com"};exports.prepareWebApiRequest=R,t(m,"prepareWebApiRequest",(function(){return R})),exports.DependentComponentType=undefined,t(m,"DependentComponentType",(function(){})),function(e){e[e.Entity=1]="Entity",e[e.Attribute=2]="Attribute",e[e.Relationship=3]="Relationship",e[e["Attribute Picklist Value"]=4]="Attribute Picklist Value",e[e["Attribute Lookup Value"]=5]="Attribute Lookup Value",e[e["View Attribute"]=6]="View Attribute",e[e["Localized Label"]=7]="Localized Label",e[e["Relationship Extra Condition"]=8]="Relationship Extra Condition",e[e["Option Set"]=9]="Option Set",e[e["Entity Relationship"]=10]="Entity Relationship",e[e["Entity Relationship Role"]=11]="Entity Relationship Role",e[e["Entity Relationship Relationships"]=12]="Entity Relationship Relationships",e[e["Managed Property"]=13]="Managed Property",e[e["Entity Key"]=14]="Entity Key",e[e.Privilege=16]="Privilege",e[e.PrivilegeObjectTypeCode=17]="PrivilegeObjectTypeCode",e[e.Role=20]="Role",e[e["Role Privilege"]=21]="Role Privilege",e[e["Display String"]=22]="Display String",e[e["Display String Map"]=23]="Display String Map",e[e.Form=24]="Form",e[e.Organization=25]="Organization",e[e["Saved Query"]=26]="Saved Query",e[e.Workflow=29]="Workflow",e[e.Report=31]="Report",e[e["Report Entity"]=32]="Report Entity",e[e["Report Category"]=33]="Report Category",e[e["Report Visibility"]=34]="Report Visibility",e[e.Attachment=35]="Attachment",e[e["Email Template"]=36]="Email Template",e[e["Contract Template"]=37]="Contract Template",e[e["KB Article Template"]=38]="KB Article Template",e[e["Mail Merge Template"]=39]="Mail Merge Template",e[e["Duplicate Rule"]=44]="Duplicate Rule",e[e["Duplicate Rule Condition"]=45]="Duplicate Rule Condition",e[e["Entity Map"]=46]="Entity Map",e[e["Attribute Map"]=47]="Attribute Map",e[e["Ribbon Command"]=48]="Ribbon Command",e[e["Ribbon Context Group"]=49]="Ribbon Context Group",e[e["Ribbon Customization"]=50]="Ribbon Customization",e[e["Ribbon Rule"]=52]="Ribbon Rule",e[e["Ribbon Tab To Command Map"]=53]="Ribbon Tab To Command Map",e[e["Ribbon Diff"]=55]="Ribbon Diff",e[e["Saved Query Visualization"]=59]="Saved Query Visualization",e[e["System Form"]=60]="System Form",e[e["Web Resource"]=61]="Web Resource",e[e["Site Map"]=62]="Site Map",e[e["Connection Role"]=63]="Connection Role",e[e["Complex Control"]=64]="Complex Control",e[e["Field Security Profile"]=70]="Field Security Profile",e[e["Field Permission"]=71]="Field Permission",e[e["Plugin Type"]=90]="Plugin Type",e[e["Plugin Assembly"]=91]="Plugin Assembly",e[e["SDK Message Processing Step"]=92]="SDK Message Processing Step",e[e["SDK Message Processing Step Image"]=93]="SDK Message Processing Step Image",e[e["Service Endpoint"]=95]="Service Endpoint",e[e["Routing Rule"]=150]="Routing Rule",e[e["Routing Rule Item"]=151]="Routing Rule Item",e[e.SLA=152]="SLA",e[e["SLA Item"]=153]="SLA Item",e[e["Convert Rule"]=154]="Convert Rule",e[e["Convert Rule Item"]=155]="Convert Rule Item",e[e["Hierarchy Rule"]=65]="Hierarchy Rule",e[e["Mobile Offline Profile"]=161]="Mobile Offline Profile",e[e["Mobile Offline Profile Item"]=162]="Mobile Offline Profile Item",e[e["Similarity Rule"]=165]="Similarity Rule",e[e["Custom Control"]=66]="Custom Control",e[e["Custom Control Default Config"]=68]="Custom Control Default Config",e[e["Data Source Mapping"]=166]="Data Source Mapping",e[e.SDKMessage=201]="SDKMessage",e[e.SDKMessageFilter=202]="SDKMessageFilter",e[e.SdkMessagePair=203]="SdkMessagePair",e[e.SdkMessageRequest=204]="SdkMessageRequest",e[e.SdkMessageRequestField=205]="SdkMessageRequestField",e[e.SdkMessageResponse=206]="SdkMessageResponse",e[e.SdkMessageResponseField=207]="SdkMessageResponseField",e[e.WebWizard=210]="WebWizard",e[e.Index=18]="Index",e[e["Import Map"]=208]="Import Map",e[e["Canvas App"]=300]="Canvas App",e[e.Connector1=371]="Connector1",e[e.Connector2=372]="Connector2",e[e["Environment Variable Definition"]=380]="Environment Variable Definition",e[e["Environment Variable Value"]=381]="Environment Variable Value",e[e["AI Project Type"]=400]="AI Project Type",e[e["AI Project"]=401]="AI Project",e[e["AI Configuration"]=402]="AI Configuration",e[e["Entity Analytics Configuration"]=430]="Entity Analytics Configuration",e[e["Attribute Image Configuration"]=431]="Attribute Image Configuration",e[e["Entity Image Configuration"]=432]="Entity Image Configuration"}($9dd9b20f1e29a34014e170bca3c836ef$export$DependentComponentType={}),exports.EntityFiltersEnum=undefined,t(m,"EntityFiltersEnum",(function(){})),function(e){e.Entity="Entity",e.Attributes="Attributes",e.Privileges="Privileges",e.Relationships="Relationships",e.All="All"}($9dd9b20f1e29a34014e170bca3c836ef$export$EntityFiltersEnum={});