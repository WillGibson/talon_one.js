/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TalononeApi) {
      root.TalononeApi = {};
    }
    root.TalononeApi.Binding = factory(root.TalononeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Binding model module.
   * @module model/Binding
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Binding</code>.
   * @alias module:model/Binding
   * @class
   * @param name {String} A descriptive name for the value to be bound.
   * @param expression {Array.<Object>} A Talang expression that will be evaluated and its result attached to the name of the binding.
   */
  var exports = function(name, expression) {
    var _this = this;

    _this['name'] = name;
    _this['expression'] = expression;
  };

  /**
   * Constructs a <code>Binding</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Binding} obj Optional instance to populate.
   * @return {module:model/Binding} The populated <code>Binding</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('expression')) {
        obj['expression'] = ApiClient.convertToType(data['expression'], [Object]);
      }
    }
    return obj;
  }

  /**
   * A descriptive name for the value to be bound.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A Talang expression that will be evaluated and its result attached to the name of the binding.
   * @member {Array.<Object>} expression
   */
  exports.prototype['expression'] = undefined;



  return exports;
}));


