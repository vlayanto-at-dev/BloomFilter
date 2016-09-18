var fnv1s = function(str) {
  var FNVPRIME = 0x01000193;
  var FNVINIT = 0x811c9dc5;

  function stringToBytes(str) {
    var ch, st, re = [];
    for (var i = 0; i < str.length; i++) {
      ch = str.charCodeAt(i);  // get char
      st = [];                 // set up "stack"
      do {
        st.push( ch & 0xFF );  // push byte to stack
        ch = ch >> 8;          // shift value down by 1 byte
      }
      while ( ch );
      // add stack contents to result
      // done because chars have "wrong" endianness
      re = re.concat( st.reverse() );
    }
   // return an array of bytes
    return re;
  }

  var bytes = stringToBytes(str);
  var hash = FNVINIT;
  for (var i=0; i < bytes.length; i++) {
    hash *= FNVPRIME;
    hash ^= bytes[i];
  }
  return Math.abs(hash);
};