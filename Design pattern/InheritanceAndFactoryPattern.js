const ModelService = function (modelType) {
    this.modelType = modelType;
    this.function = 'import';
}

ModelService.prototype.importModel = function () {
    console.log(`Importing  models of type :  ${this.modelType}`);
    console.log(`${this.importMsg}`); //calls attribute in the sub type 
}

const LMDModelService = function () {
    ModelService.call(this, 'LMD');
    this.importMsg = `Imported ${this.modelType} successfully`;
}
const FMUModelService = function () {
    ModelService.call(this, 'FMU');
    this.importMsg = `Failed to ${this.function}  ${this.modelType}`;
}
const CModelService = function () {
    ModelService.call(this, 'C code');
    this.importMsg = `Failed to  ${this.function}  ${this.modelType}`;
}

function extend(base, subtype) {
    // Avoid instantiating the base class just to setup inheritance
    // Also, do a recursive merge of two prototypes, so we don't overwrite 
    // the existing prototype, but still maintain the inheritance chain
    var origProto = subtype.prototype;
    subtype.prototype = Object.create(base.prototype);
    for (var key in origProto) {
        subtype.prototype[key] = origProto[key];
    }
    // The constructor property was set wrong, The constructor in proto points to the object of which it;s proto
    Object.defineProperty(subtype.prototype, 'constructor', {
        enumerable: false,
        value: subtype
    });
}
extend(ModelService, LMDModelService);
extend(ModelService, FMUModelService);
extend(ModelService, CModelService);


// Factory pattern logic starts here.
const FactoryService = function () { };
FactoryService.createFactory = (type) => {
    let instance = null;
    switch (type.toLowerCase()) {
        case 'lmd': instance = new LMDModelService(); break;
        case 'fmu': instance = new FMUModelService(); break;
        case 'c code': instance = new CModelService(); break;
        default: throw new Error('Invalid model type passed.');
    }
    instance._proto_ = (ModelService.prototype);
    return instance;
}

let fmuImporter = FactoryService.createFactory('FMU');
fmuImporter.importModel();
let lmdImporter = FactoryService.createFactory('LMD');
lmdImporter.importModel();