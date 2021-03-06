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
    instance = new TalononeApi.InlineResponse2001Data();
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

  describe('InlineResponse2001Data', function() {
    it('should create an instance of InlineResponse2001Data', function() {
      // uncomment below and update the code to test InlineResponse2001Data
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be.a(TalononeApi.InlineResponse2001Data);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property applicationId (base name: "applicationId")', function() {
      // uncomment below and update the code to test the property applicationId
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property endTime (base name: "endTime")', function() {
      // uncomment below and update the code to test the property endTime
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property activeRulesetId (base name: "activeRulesetId")', function() {
      // uncomment below and update the code to test the property activeRulesetId
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property features (base name: "features")', function() {
      // uncomment below and update the code to test the property features
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property couponSettings (base name: "couponSettings")', function() {
      // uncomment below and update the code to test the property couponSettings
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property referralSettings (base name: "referralSettings")', function() {
      // uncomment below and update the code to test the property referralSettings
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property limits (base name: "limits")', function() {
      // uncomment below and update the code to test the property limits
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property couponRedemptionCount (base name: "couponRedemptionCount")', function() {
      // uncomment below and update the code to test the property couponRedemptionCount
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property referralRedemptionCount (base name: "referralRedemptionCount")', function() {
      // uncomment below and update the code to test the property referralRedemptionCount
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property discountCount (base name: "discountCount")', function() {
      // uncomment below and update the code to test the property discountCount
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property lastActivity (base name: "lastActivity")', function() {
      // uncomment below and update the code to test the property lastActivity
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property updated (base name: "updated")', function() {
      // uncomment below and update the code to test the property updated
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property updatedBy (base name: "updatedBy")', function() {
      // uncomment below and update the code to test the property updatedBy
      //var instane = new TalononeApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

  });

}));
