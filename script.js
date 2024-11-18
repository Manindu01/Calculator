function append(value) {
    const result = document.getElementById("result");
    if (result.value === "0") {
      result.value = value === "±" ? "-" : value;
    } else {
      result.value += value === "±" ? "-" : value;
    }
  }
  
  function clearResult() {
    document.getElementById("result").value = "0";
  }
  
  function clearEntry() {
    const result = document.getElementById("result");
    result.value = "0";
  }
  
  function deleteChar() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1) || "0";
  }
  
  function calculate() {
    const result = document.getElementById("result");
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = "Error";
    }
  }
  