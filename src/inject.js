var dependenciesMap = {};
var injector = {
  resolve: function (constructor) {
    var dependencies = dependenciesMap[constructor.name];
    dependencies = dependencies.map(function (dependency) {
      return new dependency();
    });
    // 如果可以使用ES6的语法，下面的代码可以合并为一行：
    // return new constructor(...dependencies);
    var mockConstructor: any = function () {
      constructor.apply(this, dependencies);
    };
    mockConstructor.prototype = constructor.prototype;
    return new mockConstructor();
  },
};
function Inject(...dependencies) {
  return function (constructor) {
    dependenciesMap[constructor.name] = dependencies;
    return constructor;
  };
}
