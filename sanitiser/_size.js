// validate inputs, convert types and apply defaults
function sanitize( req ){
  
  var clean = req.clean || {};
  var params= req.query;

  // ensure the input params are a valid object
  if( Object.prototype.toString.call( params ) !== '[object Object]' ){
    params = {};
  }

  // total results
  var size = parseInt( params.size, 10 );
  if( !isNaN( size ) ){
    clean.size = Math.min( Math.max( size, 1 ), 40 ); // max
  } else {
    clean.size = 10; // default
  }

  req.clean = clean;
  
  return {'error':false};

}

// export function
module.exports = sanitize;
