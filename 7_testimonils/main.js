(function () {
  const customerName = document.querySelector(".customer-name");
  const customerText = document.querySelector(".customer-text");
  const buttons = document.querySelectorAll(".btn");
  let index = 0;
  const customers = [];

  //Create a new customer using a customer constructor

  //Customer Constructor
  function Customer(name, text) {
    this.name = name;
    this.text = text;
  }

  //Create new customer using the constructor function

  function createCustomer(name, text) {
    let customer = new Customer(name, text);

    customers.push(customer);
  }

  createCustomer(
    "John",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?"
  );
  createCustomer(
    "Sandy",
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
  );
  createCustomer(
    "Amy",
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
  );
  createCustomer(
    "Tyrell",
    "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
  );
  createCustomer(
    "Wanda",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  );

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      if (e.target.parentElement.classList.contains("prev")) {
        if (index === 0) {
          index = customers.length;
        }
        index--;
        customerName.textContent = customers[index].name;
        customerText.textContent = customers[index].text;
      }
      if (e.target.parentElement.classList.contains("next")) {
        index++;
        if (index === customers.length) {
          index = 0;
        }
        customerName.textContent = customers[index].name;
        customerText.textContent = customers[index].text;
      }
    });
  });
})();
