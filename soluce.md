
```css
#Cloud
div {
    width: 200px;
    height: 50px;
    background: linear-gradient(#1092FF, #1092FF) no-repeat right center / 75% 100% ;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 15px);
    border-radius: 100px;
  }

  div:before, div:after {
    content: '';
    width: 100px;
    height: 100px;
    background: #1092FF;
    position: absolute;
    border-radius: 50px;
  }

  div:before {
    bottom: 0;
    left: 0;
  }

  div:after {
    bottom: 30px;
    right: 20px;
  }
```

```css
#Pacman
div {
    width: 0px;
    height: 0px;
    background: #F7C600;
    position: absolute;
    border-radius: 75px;
    transform: translate(120px, 120px);
    border: 75px solid transparent ;
    border-right: 75px solid white;
}

div:before,
div:after {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: #F7C600;
  position: absolute;
}

div:before {
  transform: translateX(100px);
}
div:after {
  transform: translateX(150px);
}
```

```css
#Magnum
div {
    width: 100px;
    height: 150px;
    background: #A85D47;
    border-radius: 50px 50px 20px 20px;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%)
  }

  div:after{
    content: '';
    width: 30px;
    height: 50px;
    background: #E2931E;
    border-radius: 0 0 10px 10px;
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%)
  }
```
```css
#triangle
  div {
      top: -200px;
      left: 90px;
      position: absolute;
      border-right : 110px solid transparent;
      border-bottom : 600px solid #E74E96;
      border-left : 110px solid transparent;
  }

  div:after {
    content: '';
    position: absolute;
      top: 535px;
      left:-110px;
      border-right : 110px solid transparent;
      border-bottom : 65px solid #E74E96;
      border-left : 110px solid transparent;
  }

  div:before {
    content: '';
    position: absolute;
    top: 300px;
    left:-50px;
    border-right: 50px solid transparent;
    border-bottom : 300px solid #fff;
    border-left : 50px solid transparent;
  }