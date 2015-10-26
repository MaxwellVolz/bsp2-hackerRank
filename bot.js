// bot saves princess 2
//
// 10/26
// max volz


var test = function(input){

	var rows = input.split('\n'),
		mY = rows[1].split(' ')[0],
		mX = rows[1].split(' ')[1];
	
	for(x=2,k=rows.length-1;x<k;++x){
		
		if(rows[x].indexOf('p') != -1){
			var pY = x-2,
				pX = rows[x].indexOf('p');
			
			if(mY < pY){
				while(mY < pY){
					console.log("DOWN");
					return; //because 1 move at a time
					++mY;
				}
			}
			else if(mY > pY){
				while(mY > pY){
					console.log("UP");
					return; //because 1 move at a time
					--mY;
				}
			}
			if(mX < pX){
				while(mX < pX){
					console.log("RIGHT");
					return; //because 1 move at a time
					++mX;
				}
			}
			else if(mX > pX){
				while(mX > pX){
					console.log("LEFT");
					return; //because 1 move at a time
					--mX;
				}
			}
		}
	}
		
}







var input = "5\n1 2\n-----\n--m--\n-----\n-----\n-p---\n";

test(input);
