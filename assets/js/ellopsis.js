 
 export default class Ellipsis{
    constructor(param){
        this.text = param.text;
        this.textCount = param.textCount;
        this.findAllText = param.findAllText;
        this.showFindAllButton = param.showFindAllButton;
        this.subText();
    }
    //是否全部内容
    subText(){
        if(this.text.length>140&&!this.findAllText){
          this.text = this.text.substr(0,this.textCount)+'...';
          this.text = this.text.replace(/\s/g,'');
          this.showFindAllButton = true;
          this.findAllText = '查看全部';
        }else if(this.findAllText){
            this.text = this.text;
            this.text = this.text.replace(/\n/g,'</br>');
        }else if(this.showFindAllButton){
            this.text = this.text;
            this.text = this.text.replace(/\n/g,'</br>');
            this.findAllText = '收起内容';
        }
        return this.text
    }
    //是否显示按钮
}
