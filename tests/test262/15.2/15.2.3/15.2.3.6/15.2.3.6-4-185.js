  function testcase() 
  {
    var arrObj = [];
    Object.defineProperty(arrObj, 4294967296, {
      value : 100
    });
    return arrObj.hasOwnProperty("4294967296") && arrObj.length === 0 && arrObj[4294967296] === 100;
  }
  {
    var __result1 = testcase();
    var __expect1 = true;
  }
  