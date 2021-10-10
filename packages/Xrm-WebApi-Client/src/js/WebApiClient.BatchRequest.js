(function(undefined) {
    "use strict";

    var BatchRequest = function (parameters) {
        var params = parameters || {};

        this.method = params.method;
        this.url = params.url;
        this.payload = params.payload;
        this.headers = params.headers || [];
        this.contentId = params.contentId;
    };

    BatchRequest.prototype.stringify = function () {
        var payload = "";

        if (this.contentId) {
            payload += "Content-ID: " + this.contentId + "\n\n";
        }

        payload += this.method + " " + this.url + " HTTP/1.1\n";

        for (var i = 0; i < this.headers.length; i++) {
            var header = this.headers[i];

            if (["accept", "content-type"].indexOf(header.key.toLowerCase()) === -1) {
                payload += header.key + ": " + header.value + "\n";
            }
        }

        if (this.method.toLowerCase() === "get") {
            payload += "Accept: application/json\n\n";
        } else {
            payload += "Content-Type: application/json;type=entry\n\n";
        }

        if (this.payload) {
            payload += JSON.stringify(this.payload);
        }
        else if (this.method.toLowerCase() === "delete") {
            // Delete requests need an empty payload, pass it if not already set
            payload += JSON.stringify({});
        }

        return payload;
    };

    module.exports = BatchRequest;
} ());
