* * *
**멋쟁이(3i)** 들의 도움을 받아 7번째 시도만에 성공할 수 있었따 ! 문제점은 예전에 main.js 코드를 저장하지 않은 채 노트북을 꺼버려서 코드에 문제가 있었다 
* * *
그리고 href가 안먹혔다..! 지워니가 한방에 해결해줬다 

# **6주차 세션 요약 시작♥**

* * *
> 먼저 장고 서버를 구축하기 위해서, 가상환경을 맹글어야 한다!

* virtualenv myvenv : 'myvenv' 라는 이름의 가상환경을 생성하라
* source myvenv/bin/activate : 가상환경 켜는 명령어 
* django-admin startproject ~ : ~이라는 이름의 장고 프로젝트 생성

  (cd, ls 명령어 하고 나서 manage.py 확인하고 서버 켜야함이다..)
* python manage.py runserver : 서버 on > http://127.0.0.1:8000/ 출력되면 서버생성 완! 🙌

* * *
> 장고 서버를 구축하자

* django-admin startapp footprint : footprint라는 app 생성. app은 프로젝트 하위에서 기능별로 구분하는 단위라고 한다.
  (settings.py에 생성된 app을 등록해야 함이다!..)

* ~ 폴더의 urls.py에 footprint app의 urls.py를 연결시킨다.
* from django.conf.urls import include
  path('foorprint/', include('footprint.urls')), (콤마찍어서 마무리하는게 특징)
  코드는 외우지말고 구글링으로 찾아볼 것

* footprint 폴더의 urls.py에 footprint views연결하고 footprint_GET, footprint_POST 함수 정의한다.

* footprint 폴더의 models.py에 Footprint Database 모델 정의한다.

* 명령어 입력 :
  python manage.py makemigrations
  python manage.py migrate 

* settings.py에 가서 CRSF 보안처리 주석처리한다. 

* * *
> 여기서, CORS와 CSRF에 대해 간략히 배웠는데
  1. CORS는 Cross-Origin Resource Sharing의 약자로 '출처가 다른 곳으로부터 리소스를 공유한다.' 는 의미
  2. CSRF는 Cross-Site Request Forgery의 약자로 '특정 사이트에 로그인 된 사용자에게 강제로 작업을 수행하게 하는 공격'을 말한다.
     공격..이라니.. 무시무시하다. 

* * *

조금 헤맸지만 오류가 나는 이유가 너무 간단해서 도움을 요청하니 빠른 해결이 가능했다. 
친구들아 고마워 🙇 히히


![image](https://user-images.githubusercontent.com/101980010/170046107-c66a33cc-8e05-4f11-ad80-605ae61a13fc.png)


