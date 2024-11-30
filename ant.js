

class Ant {
    x ;
    y;
    heading;


    sensorDist=30;
    moveDist=5;
    size=2;
    rotAngle=45;




    constructor(){
        // this.x =width/2;
        // this.y =height/2;
        this.x =random(width);
        this.y =random(height);
        this.heading=random(360)

        
    }

    display(){

        fill("white")
        circle(this.x,this.y,this.size)

    }

    update(){

        const sensorDist=this.sensorDist;
        const moveDist=this.moveDist;
        const d=1;        
        
        const fIndex=floor(this.x+sensorDist*cos(this.heading))+width*floor(this.y+sensorDist*sin(this.heading));
        let f=pixels[4*d*fIndex];

        const lIndex=floor(this.x+sensorDist*cos(this.heading-45))+width*floor(this.y+sensorDist*sin(this.heading-45));
        let l=pixels[4*d*lIndex]

        const rIndex=floor(this.x+sensorDist*cos(this.heading+45))+width*floor(this.y+sensorDist*sin(this.heading+45));
        let r=pixels[4*d*rIndex]

        if (f>l && f>r){
            this.x+=moveDist*cos(this.heading);
            this.y+=moveDist*sin(this.heading);
        }
        else if (l>f && l>r){
            this.heading=((this.heading- this.rotAngle) % 360)
            this.x+=moveDist*cos(this.heading);
            this.y+=moveDist*sin(this.heading);
        }else if (r>f && r >l){            
            this.heading=(this.heading+ this.rotAngle) % 360;
            this.x+=moveDist*cos(this.heading);
            this.y+=moveDist*sin(this.heading);
        }else{
            const r=random(1);
            if (r<0.5){
                this.heading=((this.heading+this.rotAngle) % 360);
            }else if (r<1){
                this.heading=((this.heading-this.rotAngle) % 360);
            }else{
                this.heading=((this.heading+random(360)) % 360);

            }
            this.x+=moveDist*cos(this.heading);
            this.y+=moveDist*sin(this.heading);
        }

            fill("white")
            if (this.x>=width || this.y>=height || this.y <=0 || this.x<=0){
                this.heading=(this.heading+180) % 360;
                this.x+=4*moveDist*cos(this.heading);
                this.y+=4*moveDist*sin(this.heading);
            }
            // circle(this.x % width,this.y % height,this.size);
            circle(this.x,this.y,this.size);


        // line(this.x,this.y,this.x+length*cos(this.heading),this.y+length*sin(this.heading))


        // fill("white")
        // circle(this.x+sensorDist*cos(this.heading),this.y+sensorDist*sin(this.heading),5)
        // fill("white")
        // circle(this.x+sensorDist*cos(this.heading+45),this.y+sensorDist*sin(this.heading+45),5)
        // fill("white")
        // circle(this.x+sensorDist*cos(this.heading-45),this.y+sensorDist*sin(this.heading-45),5)

        
    }


}

