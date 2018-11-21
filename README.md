# lightning-star-rating

A Salesforce Lightning StarRating Component. Requires Font Awesome Static Resource.

## Demo

![star-rating-demo](./star-rating-demo.gif)

## Implementation Notes

Requires a Static Resource uploaded for the `Star.cmp`. Static Resource .zip is available here, and should be uploaded to Salesforce as Vendors.

## Sample Usage
```html
<aura:component description="TestComponent"
  access="global"
  implements="flexipage:availableForAllPageTypes" >

  <aura:attribute name="rating" type="Integer" default="2" />

  <lightning:card title="Star Rating">
    <c:StarRating rating="{!v.rating}"
      maxRating="5"
      activeColor="#ffd055"
      readOnly="false" />
    <aura:set attribute="footer" >
      {!v.rating}
    </aura:set>
  </lightning:card>

</aura:component>
```
