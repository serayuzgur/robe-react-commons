// Fix Function#name on browsers that do not support it (IE):
if (!(function f() {}).name) {
    Object.defineProperty(Function.prototype, "name", {
        get: function() {
            let name = (this.toString().match(/^function\s*([^\s(]+)/) || [])[1];
            name = name || "";
            // For better performance only parse once, and then cache the
            // result through a new accessor for repeated access.
            Object.defineProperty(this, "name", { value: name });
            return name;
        }
    });
}