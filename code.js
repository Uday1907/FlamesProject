module.exports.getAnswer=function(name1,name2){

let n1=name1;
    let n2=name2;
    let arr1=n1.split('');
    let arr2=n2.split('');
    let length1=n1.length;
    let length2=n2.length;
    let count=0;
    //console.log(n1);
    for(let i=0;i<length1;i++){
        for(let j=0;j<length2;j++){
            if(arr1[i]==arr2[j]){
                arr1[i]='*';
                arr2[j]='*';
                count++;
                break;
            }
        }
    }
    for(let i=0;i<length1;i++){
        if(arr1[i]!='*'&& arr1[i]!=' ')
            count++;
    }
    for(let i=0;i<length2;i++){
        if(arr2[i]!='*'&& arr2[i]!=' ')
            count++;
    }
    console.log(count);
class Clist{
    constructor(){
        this.length=0;
        this.first=null;
        this.last=null;
    class Node{
        constructor(element){
            this.element=element;
            this.next=null;
        }
    }
    this.add=function(element){
        let node=new Node(element);
        if(this.first===null){
            this.first=node;
            this.last=node;
            node.next=node;
        }
        else{
            let cnode=this.last;
            cnode.next=node;
            node.next=this.first;
            this.last=node;

        }
    }
    this.remove=function(element){
        let cnode=this.first;
        let prenode;
        if(cnode.element===element){
            this.first=cnode.next;
            this.last.next=this.first;
            //console.log('removed: '+cnode.element);
        }
        else{
            while(cnode.element!=element){
                prenode=cnode;
                cnode=cnode.next;
            }
            if(cnode===this.last){
                this.last=prenode;
            }
            prenode.next=cnode.next;
            console.log('removed: '+cnode.element);
        }
    }
    this.cc=function(k){
        let temp=this.first;
        for(let i=1;i<=5;i++){
            for(let j=1;j<k;j++){
                temp=temp.next;
            }
            let temp1=temp;
            temp=temp.next;
            this.remove(temp1.element);


        }
        return temp.element;
    }
    this.display=function(){
        let cnode=this.first;
        while(cnode.next!=this.first){
            console.log(cnode.element);
            cnode=cnode.next;
        }
        console.log(cnode.element);
    }
}
}

let mylist=new Clist();
mylist.add('FRIENDS');
mylist.add('LOVE');
mylist.add('ATTRACTION');
mylist.add('MARRIAGE');
mylist.add('ENEMY');
mylist.add('SIBLINGS');
//mylist.display();
let answer=mylist.cc(count);
return answer;

}
