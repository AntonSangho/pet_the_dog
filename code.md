# 코드

## 알고리즘 설명

이 프로젝트는 이렇게 작동해요:

1. 계속 반복해서 초음파 센서로 거리를 측정해요
2. 만약 거리가 20cm보다 가까우면:
   - 서보모터를 45도로 움직여서 강아지 꼬리가 아래로 내려가게 해요
   - 잠시 기다려요 (0.2초)
   - 서보모터를 105도로 움직여서 강아지 꼬리가 위로 올라가게 해요
   - 다시 잠시 기다려요 (0.2초)
3. 거리가 20cm보다 멀면:
   - 아무것도 하지 않고 계속 측정해요
4. A 버튼을 누르면:
   - 서보모터를 45도로 움직여서 강아지 꼬리가 아래로 내려가요
5. B 버튼을 누르면:
   - 서보모터를 105도로 움직여서 강아지 꼬리가 위로 올라가요

## 블록코딩

이 그림처럼 블록을 연결하면 돼요:

![code](/img/blockcode.png)

## 텍스트코딩 (Python)

```python
distance = 0

def on_button_pressed_a():
    servos.P2.set_angle(45)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    servos.P2.set_angle(105)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    global distance
    distance = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.CENTIMETERS)
    if distance < 20:
        servos.P2.set_angle(45)
        basic.pause(200)
        servos.P2.set_angle(105)
        basic.pause(200)
    else:
        distance = 0
basic.forever(on_forever)
```

## 코드 업로드하는 방법

1. 컴퓨터에서 [MakeCode 편집기](https://makecode.microbit.org/)를 열어요.
2. "새 프로젝트" 버튼을 눌러요.
3. 왼쪽 메뉴에서 "고급"을 클릭한 다음 "확장기능"을 선택해요.
4. "sonar"를 검색하고 선택해요. (초음파 센서 라이브러리)
5. 다시 "확장기능"으로 가서 "servo"를 검색하고 선택해요. (서보모터 라이브러리)
6. 블록을 그림처럼 연결해요.
7. 프로젝트 이름을 넣고 저장해요.
8. "다운로드" 버튼을 눌러서 파일을 컴퓨터에 저장해요.
9. USB 케이블로 마이크로비트를 컴퓨터에 연결해요.
10. 다운로드한 파일을 마이크로비트 드라이브에 복사해요.
11. 코드가 마이크로비트에 올라가면 자동으로 실행돼요.

## 코드 바꿔보기

1. **감지 거리 바꾸기**:
   - `만약 distance < 20:` 부분에서 20 대신 다른 숫자를 넣어보세요.
   - 숫자가 작을수록 더 가까이 다가가야 반응해요.
   
2. **서보모터 각도 바꾸기**:
   - `서보 각도 45` 와 `서보 각도 105` 값을 바꿔서 꼬리를 더 크게 또는 작게 흔들게 해보세요.
   - 서보모터는 0도부터 180도까지 움직일 수 있어요.

3. **움직임 속도 바꾸기**:
   - `일시중지 200 ms` 값을 바꿔 꼬리 흔드는 속도를 조절해보세요.
   - 숫자가 작을수록 더 빨리 움직여요.

4. **LED 표정 추가하기**:
   - 강아지가 인사할 때 마이크로비트 LED에 웃는 표정이 나오게 만들어보세요.

## 문제 해결하기

- **초음파 센서가 작동하지 않아요**: 
  - sonar 확장기능이 추가되었는지 확인하세요.
  - P0와 P1 핀에 TRIG와 ECHO가 제대로 연결되었는지 확인하세요.
  
- **서보모터가 움직이지 않아요**:
  - servo 확장기능이 추가되었는지 확인하세요.
  - P2 핀에 서보모터의 신호선이 제대로 연결되었는지 확인하세요.
  - 건전지가 충분히 충전되었는지 확인하세요.
  
- **코드가 올라가지 않아요**:
  - USB 연결이 제대로 되었는지 확인하세요.
  - 마이크로비트가 컴퓨터에 드라이브로 인식되는지 확인하세요.
