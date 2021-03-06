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
    define(['ApiClient', 'model/InlineResponse2003Bindings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2003Bindings'));
  } else {
    // Browser globals (root is window)
    if (!root.TalononeApi) {
      root.TalononeApi = {};
    }
    root.TalononeApi.InlineResponse2003Rules = factory(root.TalononeApi.ApiClient, root.TalononeApi.InlineResponse2003Bindings);
  }
}(this, function(ApiClient, InlineResponse2003Bindings) {
  'use strict';




  /**
   * The InlineResponse2003Rules model module.
   * @module model/InlineResponse2003Rules
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2003Rules</code>.
   * @alias module:model/InlineResponse2003Rules
   * @class
   * @param title {String} A short description of the rule.
   * @param condition {Array.<Object>} A Talang expression that will be evaluated in the context of the given event.
   * @param effects {Array.<Object>} An array of effectful Talang expressions in arrays that will be evaluated when a rule matches.
   */
  var exports = function(title, condition, effects) {
    var _this = this;

    _this['title'] = title;


    _this['condition'] = condition;
    _this['effects'] = effects;
  };

  /**
   * Constructs a <code>InlineResponse2003Rules</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2003Rules} obj Optional instance to populate.
   * @return {module:model/InlineResponse2003Rules} The populated <code>InlineResponse2003Rules</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('bindings')) {
        obj['bindings'] = ApiClient.convertToType(data['bindings'], [InlineResponse2003Bindings]);
      }
      if (data.hasOwnProperty('condition')) {
        obj['condition'] = ApiClient.convertToType(data['condition'], [Object]);
      }
      if (data.hasOwnProperty('effects')) {
        obj['effects'] = ApiClient.convertToType(data['effects'], [Object]);
      }
    }
    return obj;
  }

  /**
   * A short description of the rule.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * A longer, more detailed description of the rule.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * An array that provides objects with variable names (name) and talang expressions to whose result they are bound (expression) during rule evaluation. The order of the evaluation is decided by the position in the array.
   * @member {Array.<module:model/InlineResponse2003Bindings>} bindings
   */
  exports.prototype['bindings'] = undefined;
  /**
   * A Talang expression that will be evaluated in the context of the given event.
   * @member {Array.<Object>} condition
   */
  exports.prototype['condition'] = undefined;
  /**
   * An array of effectful Talang expressions in arrays that will be evaluated when a rule matches.
   * @member {Array.<Object>} effects
   */
  exports.prototype['effects'] = undefined;



  return exports;
}));


