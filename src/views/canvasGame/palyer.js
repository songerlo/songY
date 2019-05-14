import map from './Map'
class Plager {

    renderTail() {
        let self = this
        let tails = self.tail , prevPot, nextPot;
        map.ctx.beginPath();
        map.ctx.lineWidht = 2;
        map.ctx.storkeStyle = self.color

        for (let i=0; i< tails.length ; i++){
            prevPot = tails[i]
            nextPot = tails[i+1]
            if( i == 0 ) {
                map.ctx.moveTo(prevPot.x, prevPot.y)
            } else {
                map.ctx.lineTo(nextPot.x, nextPot.y)
            }
            prevPot.x -= 1.5
            prevPot.y += 1.5
        }
        map.ctx.stroke()

        self.renderLife()
    }
    renderLife(){
        let self = this
        for (let j = 1; j<= self.livesPoint.length; j++){
            let tailindex = j*5
            let life = self.livesPoint[j - 1]
            life.render(self.tail[tailindex])
        }
    }
    render(pos) {
      let self = this;
      //粒子撞击后不渲染
      if (!this.dead) {
        map.ctx.beginPath();
        map.ctx.fillStyle = self.color;
        map.ctx.arc(pos.x, pos.y, 3, 0, 2 * Math.PI, false);
        map.ctx.fill();
      }
    }
}