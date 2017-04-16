        //不能再函数内部重新声明参数
        function foo(arg){
        	{
        	let arg;
        	}
        }
        function f1() {
        	let n = 5;
        	if(true){
        		let n = 10;
        	}
        	console.log(n);
        }
        f1();

        [1,undefined,3].map((x = 'yes') => x);

        var jsondata = {
               id: 34,
               status: "ok",
               data: [232,433]
        }
        let {id, status, data: number} =jsondata;
        console.log(id, status, number); //42, ok, [232,433]

         var map = new Map();
         map.set('first', 'hello');
         for(let[key, value] of map){
             console.log(key + " "+ "is" +" "+ value);
         }

        var s = new Set();
        [3,2,3,4,5,2,2].map(x=> s.add(x))
        for (i of s){
           console.log(i);
        } //2 3 5 4
        
        {
        	var set = new Set([1,2,3,4,4]);
            console.log(set);
        }
        
        let set = new Set();
	    set.add({});
	    console.log(set.size);//1
	    set.add({});
	    console.log(set.size);//2
        
        let s = new Set();
	    s.add(1).add(2).add(2);
	    console.log(s.size);	

	    let set = new Set(['red', 'green', 'blue']);
	     for(let item of set.keys()){
	         console.log(item);
	     }
	      for(let item of set.entries()){
                console.log(item);
            }

            let set = new Set([1,2,3]);
            set =new Set([...set].map(val => val*2));
            console.log(set);
            var map = new Map([["name","张三"],["title","author"]]);
	      map.size ;//2
	      map.has("name"); //true
	      map.get("name"); //张三
	      console.log(map.get("name"));

              let map = new Map()
                 .set(1, 'a')
                 .set(2, 'b')
                 .set(3, 'c');
                 for(let i of map.keys()){
                 	console.log(i);
7        let map = new Map().set(true, 7).set({foo: 3},['abc']);
        [...map];
        console.log(map);
         
        function hMap(obj){
	        let map = new Map();
	        for (let k of Object.keys(obj)){
	            map.set(k, obj[k]);
	        }
	        return map;
	    }
	    hMap({yes: true, no: false});
	    var person = new Object();
	    person.name = "yehui";
	    alert(person.name);



/*type semaphore = record
                 value:integer
                 L: list of process
                 end
//相应的描述wait(S)和signal(S)操作
p wait(S)
    var S: semaphore;
    begin
        S.value: =S.value - 1;
        if S.value < 0 then block(S.L);
    end
p signal(S)
    var S: semaphore;
    begin
        S.value: =S.value + 1;
        if S.value <= 0 then wakeup(S.L);
    end*/