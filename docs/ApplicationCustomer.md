# TalononeApi.ApplicationCustomer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. The exact moment this entity was created. The exact moment this entity was created. | 
**integrationId** | **String** | The ID used for this entity in the application system. The ID used for this entity in the application system. | 
**attributes** | **Object** | Arbitrary properties associated with this item | 
**accountId** | **Number** | The ID of the Talon.One account that owns this profile. The ID of the Talon.One account that owns this profile. | 
**closedSessions** | **Number** | The total amount of closed sessions by a customer. A closed session is a successful purchase. | 
**totalSales** | **Number** | Sum of all purchases made by this customer | 
**loyaltyMemberships** | [**[InlineResponse20014LoyaltyMemberships]**](InlineResponse20014LoyaltyMemberships.md) | A list of loyalty programs joined by the customer | 
**lastActivity** | **Date** | Timestamp of the most recent event received from this customer | 


