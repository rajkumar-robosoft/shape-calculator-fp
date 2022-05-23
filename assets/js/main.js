const areaofRect = (a, b) => a * b;

const areaofCircle = (d) => (Math.PI * d/2 * d/2).toFixed(2);

const areaofSquare = (a) => a * a;

const areaofEllipse = (a, b) => (Math.PI * a * b).toFixed(2);
  
 //Step 2 
 function gotoStep2() {
  var getSelected = ''
  getSelected = document.querySelector('input[name="shape"]:checked');
  this.selectedShape = getSelected.value;
  if (getSelected != null) {
      document.getElementById('step-1').classList.add('hidden');
      document.getElementById('step-2').classList.remove('hidden');
      document.getElementById('selected-shape').innerText = selectedShape;
      document.getElementById(`${selectedShape.toLowerCase()}-input`).classList.remove('hidden');
  } else {
      alert('Select a Shape');
  }
}

//Step 3
function gotoStep3() {
  document.getElementById('step-2').classList.add('hidden');
  document.getElementById('step-3').classList.remove('hidden');
}
//Calculate Area
function calculateArea() {
  switch (this.selectedShape) {
      case "Rectangle":
          let length = document.getElementById('length').value;
          let width = document.getElementById('width').value;
          if (length > 0 && width > 0) {
              document.getElementById('result-details').innerHTML = `You have selectes a <b>${this.selectedShape}</b> with a length of ${length} and width of ${width}. Below is your result:`;
              document.getElementById('result-area').innerHTML = `The Area is ${areaofRect(length, width)}`;
              gotoStep3();
          } else {
              document.getElementById("length").focus();
              alert('Please enter the value!');
          }
          break;
      case "Circle":
          let diameter = document.getElementById("diameter").value;
          if (diameter > 0) {
              document.getElementById('result-details').innerHTML = `You have selected a <b>${this.selectedShape}</b> with a diameter of ${diameter}. Below is your result:`;
              document.getElementById('result-area').innerHTML = `The Area is ${areaofCircle(diameter)}`;
              gotoStep3();
          } else {
              document.getElementById("diameter").focus();
              alert('Please enter the value!');
          }
          break;
      case "Square":
          let side = document.getElementById("side").value;
          if (side > 0) {
              document.getElementById('result-details').innerHTML = `You have selected a <b>${this.selectedShape}</b> with a side of ${side}.. Below is your result:`;
              document.getElementById('result-area').innerHTML = `The Area is ${areaofSquare(side)}`;
              gotoStep3();
          } else {
              document.getElementById("side").focus();
              alert('Please enter the value!');
          }
          break;
      case "Ellipse":
          let majorAxis = document.getElementById("major-axis").value;
          let minorAxis = document.getElementById("minor-axis").value;
          if (majorAxis > 0 && minorAxis > 0) {
              document.getElementById("result-details").innerHTML = `You have selected a <b>${this.selectedShape}</b> with a minor axis of ${minorAxis} and major axis of ${majorAxis}. Below is your result:`;
              document.getElementById('result-area').innerHTML = `The Area is ${areaofEllipse(majorAxis, majorAxis)}`;
              gotoStep3();
          } else {
              document.getElementById("major-axis").focus();
              alert('Please enter the value!');
          }
          break;
      default:
          break;
  }
}

// Startover or Reset


function startOver() {

  document.getElementById("step-3").classList.add("hidden");
  document.getElementById("step-2").classList.add("hidden");
  document.getElementById(`${this.selectedShape.toLowerCase()}-input`).classList.add("hidden");
  document.getElementById("step1-form").reset();
  document.getElementById("step2-form").reset();
  document.getElementById("step-1").classList.remove("hidden");

}