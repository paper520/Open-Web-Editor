let OpenWebEditor = function (options) {

    if (!(this instanceof OpenWebEditor)) {
        throw new Error('Open Web Editor is a constructor and should be called with the `new` keyword');
    }

    // todo

};

if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = OpenWebEditor;
} else {
    window.OpenWebEditor = OpenWebEditor;
}
