/**
 * Created by hunter on 2017/6/2.
 */
new Vue({
    el:'#pagination',
    data: {
        staticNum:[{id:2,display:false,val:2},{id:3,display:false,val:3},{id:4,display:false,val:4}
            ,{id:5,display:false,val:5},{id:6,display:false,val:6}],
        pageNum:15,
        ellipsis1:false,
        ellipsis2:false,
        left:false,
        right:false,
        lastNum:false,
        preSec:1
    },
    mounted:function () {
        document.getElementById("1").className='_active';
        if (this.pageNum<=4){
            if (this.pageNum==2){this.lastNum=true}
            if (this.pageNum==3){this.lastNum=true;this.staticNum[0].display=true;}
            if (this.pageNum==4){this.lastNum=true;this.staticNum[0].display=true;this.staticNum[1].display=true;}
        }
        if (this.pageNum>4){
            this.left=true;
            this.right=true;
            this.lastNum=true;
            this.ellipsis2=true;
            this.staticNum[0].display=true;this.staticNum[1].display=true;
        }
    },
    methods: {
        select: function (event) {
            this.preSec=parseInt(event.target.id);
            let arr=document.getElementsByName('pana');
            for (let i in arr) {
                if (!arr.hasOwnProperty(i)){continue}
                arr[i].className='';
            }
            if(this.pageNum>=5){
                let seleVal=parseInt(document.getElementById(event.target.id).firstChild.nodeValue);
                if((seleVal-1)>=4 && (this.pageNum-seleVal)>=4){
                    this.ellipsis1=true;
                    this.ellipsis2=true;
                    document.getElementById('4').className='_active';
                    for (let i=0,j=-2;i<5;i++,j++)
                        this.staticNum[i].val=seleVal+j;
                }
                if((seleVal-1)<4 && (this.pageNum-seleVal)>=4){
                    document.getElementById(event.target.id).className='_active';
                    this.disappear();
                    for (let i=2,j=2;i<=parseInt(event.target.id)+2;i++,j++){
                        this.staticNum[i-2].val=j;
                        this.staticNum[i-2].display=true;}
                    this.ellipsis1=false;
                    this.ellipsis2=true;
                }
                if((seleVal-1)>=4 && (this.pageNum-seleVal)<4){
                    document.getElementById(event.target.id).className='_active';
                    this.disappear();
                    for (let i=6,j=this.pageNum-1;i>=parseInt(event.target.id)-2;i--,j--){
                        this.staticNum[i-2].val=j;
                        this.staticNum[i-2].display=true;}
                    this.ellipsis1=true;
                    this.ellipsis2=false;
                }
                if (this.pageNum==5){
                    document.getElementById(event.target.id).className='_active';
                    if(seleVal==2 || seleVal==3 || seleVal==4){
                        for (let i=2;i<5;i++){
                            this.staticNum[i-2].val=i;
                            this.staticNum[i-2].display=true;}
                        this.ellipsis1=false;
                        this.ellipsis2=false;
                    }
                }
                if (this.pageNum==6){
                    document.getElementById(event.target.id).className='_active';
                    if(seleVal==3 || seleVal==4){
                        for (let i=2;i<6;i++){
                            this.staticNum[i-2].val=i;
                            this.staticNum[i-2].display=true;}
                        this.ellipsis1=false;
                        this.ellipsis2=false;
                    }
                }
                if (this.pageNum==7){
                    document.getElementById(event.target.id).className='_active';
                    if(seleVal==4){
                        for (let i=2;i<7;i++){
                            this.staticNum[i-2].val=i;
                            this.staticNum[i-2].display=true;}
                        this.ellipsis1=false;
                        this.ellipsis2=false;
                    }
                }
            }
        },
        disappear:function () {
            for(let i=0; i<5;i++){
                this.staticNum[i].display=false;
            }
        },
        previous:function () {
            if(this.preSec-1>0)
                document.getElementById(this.preSec-1+'').click()
        },
        theNext:function () {
            if(this.preSec+1<=7)
                document.getElementById(this.preSec+1+'').click()
        }
    }
});