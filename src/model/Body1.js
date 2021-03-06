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
    root.TalononeApi.Body1 = factory(root.TalononeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Body1 model module.
   * @module model/Body1
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Body1</code>.
   * @alias module:model/Body1
   * @class
   * @param name {String} The name of this application.
   * @param key {String} Hex key for HMAC-signing API calls as coming from this application (16 hex digits)
   * @param timezone {String} A string containing an IANA timezone descriptor.
   * @param currency {String} A string describing a default currency for new customer sessions.
   */
  var exports = function(name, key, timezone, currency) {
    var _this = this;

    _this['name'] = name;

    _this['key'] = key;
    _this['timezone'] = timezone;
    _this['currency'] = currency;

  };

  /**
   * Constructs a <code>Body1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body1} obj Optional instance to populate.
   * @return {module:model/Body1} The populated <code>Body1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('caseSensitivity')) {
        obj['caseSensitivity'] = ApiClient.convertToType(data['caseSensitivity'], 'String');
      }
    }
    return obj;
  }

  /**
   * The name of this application.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A longer description of the application.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Hex key for HMAC-signing API calls as coming from this application (16 hex digits)
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * A string containing an IANA timezone descriptor.
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * A string describing a default currency for new customer sessions.
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * A string indicating how should campaigns in this application deal with case sensitivity on coupon codes.
   * @member {module:model/Body1.CaseSensitivityEnum} caseSensitivity
   */
  exports.prototype['caseSensitivity'] = undefined;


  /**
   * Allowed values for the <code>caseSensitivity</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CaseSensitivityEnum = {
    /**
     * value: "sensitive"
     * @const
     */
    "sensitive": "sensitive",
    /**
     * value: "insensitive-uppercase"
     * @const
     */
    "insensitive-uppercase": "insensitive-uppercase",
    /**
     * value: "insensitive-lowercase"
     * @const
     */
    "insensitive-lowercase": "insensitive-lowercase"  };


  return exports;
}));


