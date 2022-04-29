window.MyWidget({
  name: 'MyWidget_Overpower',
  passDownFunc: function (string) {
    console.log('User input:', string);
  }
}).render('#my-widget');