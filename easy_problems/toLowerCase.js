//Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

var toLowerCase = function(str) {
  const alphaHash = {
    A: "a",
    B: "b",
    C: "c",
    D: "d",
    E: "e",
    F: "f",
    G: "g",
    H: "h",
    I: "i",
    J: "j",
    K: "k",
    L: "l",
    M: "m",
    N: "n",
    O: "o",
    P: "p",
    Q: "q",
    R: "r",
    S: "s",
    T: "t",
    U: "u",
    V: "v",
    W: "w",
    X: "x",
    Y: "y",
    Z: "z"
  };

  lowerCase = "";
  str.split("").forEach(char => {
    if (alphaHash[char]) {
      lowerCase += alphaHash[char];
    } else {
      lowerCase += char;
    }
  });

  return lowerCase;
};

//Runtime: 64 ms, faster than 42.01% of JavaScript online submissions for To Lower Case.
