const oppoStatus = [
  {
    "K_OPPO_STATUS": 1,
    "STATUS": "1. Initial Contact",
    "SUCCESS": 0
  },
  {
    "K_OPPO_STATUS": 2,
    "STATUS": "2. Demonstration",
    "SUCCESS": 25
  },
  {
    "K_OPPO_STATUS": 3,
    "STATUS": "3. Proposal",
    "SUCCESS": 50
  },
  {
    "K_OPPO_STATUS": 4,
    "STATUS": "4. Negotiation",
    "SUCCESS": 75
  },
  {
    "K_OPPO_STATUS": 5,
    "STATUS": "5. Order",
    "SUCCESS": 100
  }
];





const Module = class {
  
  
  constructor() {
    
    //HTML elements to manipulate .. props
    this.button = document.querySelector('button')
    this.selector = document.querySelector('select')
    this.input = document.querySelector('input')
    this.output = document.querySelector('.output')
    

    //Event listeners.. drop-down change .. and form submit.
    this.button.addEventListener("click", this.submit.bind(this))
    this.selector.addEventListener("change", this.select.bind(this))


  }
  
  start() {
	  // Start modifying the form elements here!
	  // You are allowed to add extra methods and properties to this class
        for(let elem of oppoStatus) {
            const node = document.createElement("option");
            node.innerHTML = elem.STATUS
            node.value = elem.SUCCESS
            this.selector.appendChild(node)
            this.input.value = elem.SUCCESS
        }

  }
  
  submit(evt) {
    //form submit handler method.. outputs value in JSON
     
      evt.preventDefault()
      
      //Get status value from array..
      const statusVal = oppoStatus.find(elem => elem.SUCCESS == this.selector.value )
      
      //shape output ojbect and stringify it..
      const outputObj = {status: statusVal?.K_OPPO_STATUS, success: parseInt(this.input.value)};
      const jsonObj = JSON.stringify(outputObj);
      this.output.innerHTML = jsonObj
    
  }
  
    select (evt) {
    //drop-down selection handler method.. updates value(success) in input field. 
     
     this.input.value = this.selector.value;
      
    
  }
  
  
  
}

const main = new Module();
main.start();