const obj = {
  first_name: 'ai',
  last_name: 'yosikawa',
  printFullName: function() {
    console.log(this);
    const _that = this;

    window.setTimeout(function() {
      console.log(this);
    }.bind({first_name: 'Taro'}));
  }
}

const obj2 = {
  first_name: 'ai',
  last_name: 'yosikawa',
  printFullName: function() {
    console.log(this);
    const _that = this;

    window.setTimeout(function() {
      console.log(this);
    }.bind(this));
  }
}

obj.printFullName();
obj2.printFullName();