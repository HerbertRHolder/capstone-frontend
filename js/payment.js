/* Defining helper functions/objects */
// changeImpactedElement: function that removes the provided class(es) and adds the provided class(es) to Hosted Payment Fields element
function changeImpactedElement(tagId, removeClass, addClass) {
    removeClass = removeClass || "";
    addClass = addClass || "";
    $("[data-bluesnap=" + tagId + "]")
        .removeClass(removeClass)
        .addClass(addClass);
}
// cardUrl: object that stores card type code (received from BlueSnap) and associated card image URL
var cardUrl = {
  "AMEX": "https://files.readme.io/97e7acc-Amex.png", 
  "DINERS": "https://files.readme.io/8c73810-Diners_Club.png",
  "DISCOVER": "https://files.readme.io/caea86d-Discover.png",
  "JCB": "https://files.readme.io/e076aed-JCB.png",
  "MASTERCARD": "https://files.readme.io/5b7b3de-Mastercard.png",
  "VISA": "https://files.readme.io/9018c4f-Visa.png"
}; 

/* Defining bsObj: object that stores Hosted Payment Fields 
event handlers, styling, placeholder text, etc. */
var bsObj = {
  //insert your Hosted Payment Fields token
  token: "b44b553f82290ad50eaec4a9ab333c810b57eb2e00075eb061282694ce77d74f_", 
  onFieldEventHandler: {
    onFocus: function(tagId) {
      // Handle focus
      changeImpactedElement(tagId, "hosted-field-valid hosted-field-invalid", "hosted-field-focus"); 
    },
    onBlur: function(tagId) {
      // Handle blur
      changeImpactedElement(tagId, "hosted-field-focus"); 
    },
    onError: function(tagId, errorCode, errorDescription, eventOrigin) {
      // Handle a change in validation
      changeImpactedElement(tagId, "hosted-field-valid hosted-field-focus", "hosted-field-invalid");     
      $("#" + tagId + "-help").removeClass('helper-text-green').text(errorCode + " - " + errorDescription + " - " + eventOrigin); 
  },
    onType: function(tagId, cardType, cardData) {
      // get card type from cardType and display card image
      $("#card-logo > img").attr("src", cardUrl[cardType]);
      if (null != cardData) {
         $("#" + tagId + "-help").addClass('helper-text-green').text(JSON.stringify(cardData));
      }
    },
    onValid: function(tagId) {
      // Handle a change in validation
      changeImpactedElement(tagId, "hosted-field-focus hosted-field-invalid", "hosted-field-valid"); 
      $("#" + tagId + "-help").text(""); 
    }
  },
  //styling is optional
  style: {
    // Styling all inputs
    "input": {
      "font-size": "14px",
      "font-family": "Helvetica Neue,Helvetica,Arial,sans-serif",
      "line-height": "1.42857143",
      "color": "#555"
    },

    // Styling a specific field
    /*"#ccn": {
                        
                    },*/

    // Styling Hosted Payment Field input state
    ":focus": {
      "color": "#555"
    }
  },
  ccnPlaceHolder: "4111222233334444",
  cvvPlaceHolder: "123",
  expPlaceHolder: "MM / YY"
}

/* After DOM is loaded, calling bluesnap.hostedPaymentFieldsCreation: function that takes token and bsObj as inputs and initiates Hosted Payment Fields */
$(document).ready(function() {
  bluesnap.hostedPaymentFieldsCreate(bsObj); 
});

/* Calling bluesnap.submitCredentials: function that submits card data to 
BlueSnap and calls input function with card data object if submission was successful */
function do_when_clicking_submit_button() {
  bluesnap.hostedPaymentFieldsSubmitData( 
    function(callback) {
      if (null != callback.error) {
        var errorArray = callback.error;
            for (i in errorArray) {
        $("#" + errorArray[i].tagId + "-help").text(errorArray[i].errorCode + " - " + errorArray[i].errorDescription); 
            }
      } else {
        var cardData = callback.cardData;
      alert(
        "Card Type: " +
        cardData.ccType +
        " Last 4 Digits: " +
        cardData.last4Digits +
        " Issuing Country: " +
        cardData.issuingCountry +
        " Is Regulated Card: " +
        cardData.isRegulatedCard + 
        " Card Sub Type: " + 
        cardData.cardSubType + 
        " Bin Category: " +
        cardData.binCategory +    
        " Exp: " +
        cardData.exp +
        " after that I can call final submit"
      );
      // This is where you would perform final submission to your server
      }
    }
  );
}