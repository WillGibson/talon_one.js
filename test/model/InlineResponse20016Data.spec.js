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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TalononeApi);
  }
}(this, function(expect, TalononeApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TalononeApi.InlineResponse20016Data();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse20016Data', function() {
    it('should create an instance of InlineResponse20016Data', function() {
      // uncomment below and update the code to test InlineResponse20016Data
      //var instane = new TalononeApi.InlineResponse20016Data();
      //expect(instance).to.be.a(TalononeApi.InlineResponse20016Data);
    });

    it('should have the property integrationId (base name: "integrationId")', function() {
      // uncomment below and update the code to test the property integrationId
      //var instane = new TalononeApi.InlineResponse20016Data();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new TalononeApi.InlineResponse20016Data();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TalononeApi.InlineResponse20016Data();
      //expect(instance).to.be();
    });

    it('should have the property customerId (base name: "customerId")', function() {
      // uncomment below and update the code to test the property customerId
      //var instane = new TalononeApi.InlineResponse20016Data();
      //expect(instance).to.be();
    });

    it('should have the property lastActivity (base name: "lastActivity")', function() {
      // uncomment below and update the code to test the property lastActivity
      //var instane = new TalononeApi.InlineResponse20016Data();
      //expect(instance).to.be();
    });

    it('should have the property couponRedemptions (base name: "couponRedemptions")', function() {
      // uncomment below and update the code to test the property couponRedemptions
      //var instane = new TalononeApi.InlineResponse20016Data();
      //expect(instance).to.be();
    });

    it('should have the property couponUseAttempts (base name: "couponUseAttempts")', function() {
      // uncomment below and update the code to test the property couponUseAttempts
      //var instane = new TalononeApi.InlineResponse20016Data();
      //expect(instance).to.be();
    });

    it('should have the property couponFailedAttempts (base name: "couponFailedAttempts")', function() {
      // uncomment below and update the code to test the property couponFailedAttempts
      //var instane = new TalononeApi.InlineResponse20016Data();
      //expect(instance).to.be();
    });

    it('should have the property accruedDiscounts (base name: "accruedDiscounts")', function() {
      // uncomment below and update the code to test the property accruedDiscounts
      //var instane = new TalononeApi.InlineResponse20016Data();
      //expect(instance).to.be();
    });

    it('should have the property accruedRevenue (base name: "accruedRevenue")', function() {
      // uncomment below and update the code to test the property accruedRevenue
      //var instane = new TalononeApi.InlineResponse20016Data();
      //expect(instance).to.be();
    });

    it('should have the property totalOrders (base name: "totalOrders")', function() {
      // uncomment below and update the code to test the property totalOrders
      //var instane = new TalononeApi.InlineResponse20016Data();
      //expect(instance).to.be();
    });

    it('should have the property totalOrdersNoCoupon (base name: "totalOrdersNoCoupon")', function() {
      // uncomment below and update the code to test the property totalOrdersNoCoupon
      //var instane = new TalononeApi.InlineResponse20016Data();
      //expect(instance).to.be();
    });

    it('should have the property campaignName (base name: "campaignName")', function() {
      // uncomment below and update the code to test the property campaignName
      //var instane = new TalononeApi.InlineResponse20016Data();
      //expect(instance).to.be();
    });

  });

}));
