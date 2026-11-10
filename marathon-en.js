/* 마라톤 화면 영문 내보내기용 런타임 번역 — location.hash 에 "lang":"en" 이 있으면 켜진다 */
(function () {
  var D = {
    "러닝스타 첫 시즌 · 시드니를 향해": "Running Star · Road to Sydney",
    "남았어요": "left", "곧 시작해요": "Starting Soon", "시드니 마라톤 출전권": "Sydney Marathon Entry",
    "내 러닝스타 스코어": "My Score", "내 순위": "My Rank", "시즌 코스": "Season Course", "코스 보기": "View Course",
    "러닝스타": "Running Star", "마라톤 챌린지": "Marathon Challenges", "전체보기": "See All", "기간": "Period", "상금": "Prize", "Coming Soon": "Coming Soon",
    "참가 국가": "Countries", "내 픽": "My Picks", "픽 리워드 보기": "Pick Rewards", "내가 픽한 영상이 최종 Top 5에 들면 포인트를 드려요.": "Get points when a video you picked makes the final Top 5.",
    "마감까지": "Ends in", "시작까지": "Starts in", "종료": "Ended", "수상자": "Winners", "상금 지급 기준": "Prize Rules", "내 영상이 픽을 많이 받아 Top 5에 들면 받아요": "Win when your video gets enough picks for the Top 5",
    "실시간 Top 5": "Live Top 5", "참가자 이름과 영상은 마감 후에 공개돼요": "Names and videos are shown after it ends",
    "내 영상": "My Video", "올린 영상이 없어요": "No video yet", "영상을 올리면 바로 러닝스타 스코어가 쌓여요": "Upload a video to start building your score",
    "픽": "Picks", "순위 미반영 · 사유 보기": "Not ranked · See why", "참가하면 내 순위와 Top 5까지 남은 픽을 여기서 볼 수 있어요": "Join to see your rank and the picks you need for the Top 5",
    "불러오는 중": "Loading", "손을 떼면 닫혀요": "Release to close", "참가 영상": "Entries", "순위": "Ranking", "일정": "Schedule", "정보": "Info",
    "참가하기": "Join", "참가 완료": "Joined", "다시 참가하기": "Join Again", "챌린지가 끝났어요": "Challenge Ended",
    "챌린지 영상 보기": "View Videos", "공유": "Share", "뒤로": "Back", "더보기": "More", "닫기": "Close", "챌린지 기간": "Challenge Period",
    "참가 완료!": "You're In!", "러닝스타 스코어가 바로 쌓였어요": "Score added",
    "참가 스코어": "Entry Score", "시즌 코스 스탬프": "Season Course", "확인": "OK", "러닝스타 보기": "View Running Star",
    "영상 내리기": "Take Down", "취소": "Cancel", "합계": "Total", "내리기": "Take Down",
    "영상을 내리면 참가가 취소돼요": "Take down this video? Your entry will be canceled",
    "6회 달성 보너스": "6-Entry Bonus", "3회 달성 보너스": "3-Entry Bonus", "받은 픽": "Picks",
    "영상 편집": "Edit Video", "설명글만 바꿀 수 있어요": "Only the caption can be changed", "영상 삭제": "Delete Video", "참가 중인 챌린지에서도 빠져요": "It's also removed from the challenge",
    "러닝스타 SEASON 1": "Running Star SEASON 1", "러닝스타가 되면": "Become the Running Star", "시드니 마라톤에 보내드려요": "We'll fly you to Sydney",
    "2027 TCS 시드니 마라톤 · 2027년 8월 29일 (일)": "2027 TCS Sydney Marathon · Sun, Aug 29, 2027",
    "출전권": "Race Entry", "왕복 항공권": "Round Trip", "1인 · 인천 출발": "1 person · From Incheon", "숙소": "Hotel", "3박 · 대회장 인근": "3 nights · Near venue",
    "이렇게 하면 돼요": "How It Works", "국내 대회 중심": "Mostly Korean races", "마라톤 챌린지에 참가해요": "Join Marathon Challenges",
    "그 대회에서 찍은 영상을 올리면 돼요": "Upload a video from the race", "· 지금도 할 수 있어요": " · Open now",
    "러닝스타 스코어가 쌓여요": "Build your score", "참가 · 받은 픽 · 앱 활동 · 시즌 코스 보너스": "Entries · Picks · App Activity · Course Bonus",
    "시즌 1위 한 명이 시드니로": "Season No.1 goes to Sydney", "스코어는 이렇게 쌓여요": "How Score Adds Up", "유의사항": "Things to Know",
    "영상 · 스코어 · 상품 · 참가비": "Video · Score · Prize · Entry Fee", "참가할 챌린지 보기": "Find Challenges",
    "시즌 시작": "Season Start", "시즌 기간": "Season", "시드니로 가는 사람": "Who Goes to Sydney", "남은 기간": "Time Left", "시즌 1위 1명": "Season No.1",
    "시즌이 끝나면 발표해요": "Announced after the season", "12월 31일 마감 · 1월 초에 발표해요": "Ends Dec 31 · Winner in early Jan",
    "마라톤 챌린지 참가": "Marathon Challenge Entry", "참가한 마라톤 챌린지 하나당": "Per challenge joined",
    "픽 하나당 · 대회당 최대 1,500점": "Per pick · Max 1,500 per race", "앱 활동": "App Activity",
    "받은 포인트의 10% · 일일 최대 100점": "10% of Points · Max 100/day", "시즌 코스 보너스": "Season Course Bonus",
    "마라톤 챌린지 참가 3회 +3,000점 · 6회 +6,000점": "3 entries +3,000 · 6 entries +6,000",
    "영상을 내리거나 심사에서 미인정되면 그 대회에서 받은 스코어가 회수돼요": "Take it down or not accepted in review? That race's score is taken back.",
    "스코어 순위": "Leaderboard", "순위를 새로 불러오는 중": "Refreshing…", "스코어 내역 보기": "See Score History", "내역": "History",
    "당겨서 새로고침": "Pull to refresh", "기준": "as of", "러닝스타 안내": "About Running Star",
    "시즌이 끝났어요": "Season Ended", "최종 순위": "Final Ranks", "최종 순위 집계 중": "Finalizing Ranks", "1월 8일 발표": "Jan 8",
    "12월 31일 자정에 마감했어요 · 심사가 끝나는 1월 초에 최종 순위를 발표해요": "Closed Dec 31 · Final ranks in early Jan",
    "1월 8일에 최종 순위를 발표했어요": "Final ranks out Jan 8",
    "12월 31일 자정 마감 · 심사가 끝나는 1월 초에 최종 순위를 발표해요": "Closes Dec 31 midnight · Final ranks in early Jan",
    "참가 전에": "Before you join", "이것만 확인해 주세요": "Check these", "영상": "Video", "스코어": "Score", "상품": "Prize", "참가비": "Entry Fee",
    "회수된 스탬프": "Revoked Stamps", "회수": "Taken back", "픽 스코어": "Pick Score", "받지 못함": "Not Earned",
    "문의하기": "Contact Us", "회수된 스탬프가 없어요": "No revoked stamps", "심사에서 미인정된 참가가 없어요.": "All your entries were accepted.",
    "챌린지 참가 기준": "Entry Rules", "영상 3가지": "3 video rules", "자세한 기준": "Full Rules",
    "대회에 참가한 것을 확인할 수 없어요": "Race not verified",
    "영상에 얼굴과 배번호, 또는 대회 인증 요소가 한 편에 함께 담겨 있지 않아요.": "Face and bib (or a race marker) aren't shown together.",
    "본인이 출연한 영상이 아니에요": "You're not in the video",
    "영상 속 인물이 본인으로 확인되지 않았어요. 촬영은 다른 사람이 해도 되지만 본인이 나와야 해요.": "We couldn't confirm it's you. Anyone can film, but you must appear.",
    "직접 찍은 영상이 아니에요": "Not your own video", "타인의 영상이거나 AI로 만든 영상으로 확인됐어요.": "It's someone else's or AI-made.",
    "이 챌린지는 참가하지 않은 것과 같이 처리돼요": "Counted as not entered",
    "얼굴과 배번호가 한 편에 함께": "Face and bib in one video", "또는 대회 인증 요소가 함께 담겨야 해요": "or a race marker with you",
    "본인이 출연한 영상으로": "You must appear", "촬영은 다른 사람이 해도 괜찮아요": "Anyone can film",
    "직접 찍은 영상으로": "Your own footage", "타인 영상 · AI로 만든 영상은 인정되지 않아요": "Others' or AI-made videos don't count",
    "원하는 챌린지에 참가하고": "Join a race,", "러닝스타에 도전하세요": "go for Running Star",
    "전체": "All", "내 참가": "Joined", "지금 참가할 수 있어요": "Open Now", "종료": "Ended", "픽 받는 중": "Getting Picks", "심사 중": "In Review", "스탬프 회수": "Revoked",
    "스코어 내역": "Score History", "적립 내역": "History", "시즌 전체": "Whole season", "20줄씩 더 불러와요": "Loading more", "시즌 1 내역을 모두 봤어요": "That's all for Season 1", "아직 내역이 없어요": "Nothing yet",
    "참가": "Entries", "활동": "Activity", "코스": "Course", "다시 참가": "Joined again", "영상 내림": "Video taken down", "심사에서 미인정됐어요": "Not accepted in review",
    "시즌 코스 3회 달성": "3-Entry Bonus", "3회 달성 보너스 회수": "3-Entry Bonus taken back", "스탬프 3개 아래로": "Stamps below 3",
    "GO대관령 국제 트레일런 영상": "3rd GO Daegwallyeong Int'l Trail Run",
    "3회 달성": "3 entries", "6회 달성": "6 entries", "채운 스탬프": "Stamps", "받은 코스 스코어": "Course Score", "받음": "Earned",
    "스탬프 획득": "Stamp Earned", "스탬프를 받았어요": "Stamp Earned", "챌린지 종료 후 더해져요": "Added after it ends", "아직 비어 있어요": "Still Empty",
    "마라톤 챌린지에 영상을 올리면 스탬프를 받아요.": "Upload to a marathon challenge to earn a stamp.",
    "코스를 완성했어요. 챌린지에 더 참가하면 참가 및 픽 스코어는 계속 쌓여요.": "Course complete. Keep joining to earn more Entry and Pick Score.",
    "코스를 완성했어요.": "Course complete.", "내가 채운 챌린지 6건": "My Challenges 6", "챌린지에 더 참가하면 참가 및 픽 스코어는 계속 쌓여요.": "Keep joining to earn more Entry and Pick Score.",
    "내 영상 보기": "View My Video", "내가 채운 챌린지": "My Challenges", "코스를 완성했어요": "Course complete",
    "알림": "Notifications", "사유 보기": "See why", "방금 전": "Just now", "1시간 전": "1h ago", "오늘": "Today", "어제": "Yesterday", "최근 7일": "Last 7 days", "이전": "Earlier",
    "러닝스타 상세": "Running Star", "활동 ": "Activity", "챌린지": "Challenges", "공지사항": "Notices", "소식": "News",
    "러닝스타 시즌 1이 내일 자정에 마감돼요": "Season 1 closes tomorrow at midnight", "러닝스타 시즌 1 최종 순위가 나왔어요": "Season 1 final ranks are out",
    "한글런 2026 챌린지가 3일 남았어요. 끝나면 영상을 심사해요": "Hangeul Run 2026 ends in 3 days. Review follows.",
    "슈퍼노바 챌린지": "Supernova Challenge", "가 3일 뒤에 끝나요": " ends in 3 days", "가방 속 챌린지": "In My Bag Challenge", "에서 52위에 올랐어요": ": you're now No.52",
    "먹방 챌린지": "Mukbang Challenge", "에 올린 영상이 순위에 반영되지 않았어요": ": your video wasn't ranked",
    "GO대관령 국제 트레일런": "3rd GO Daegwallyeong Int'l Trail Run", "Run Your Way 2026": "Run Your Way 2026", "런센스 2026": "Run Sense 2026", "해리포터런 2026": "Harry Potter Run 2026",
    "한글런 2026": "Hangeul Run 2026", "카카오프렌즈런 2026": "Kakao Friends Run 2026", "디즈니런 2026 인천": "Disney Run 2026 Incheon",
    "용감한 쿠키RUN in 서울 2026": "Brave Cookie RUN in Seoul 2026", "쥬라기파크런 2026": "Jurassic Park Run 2026",
    "SEASON 1 누적": "Season 1 total", "참가비 500P는 돌려드리지 않아요.": "No refund on the 500P fee.", "오늘 40/100": "Today 40/100", "· 참가": "· Joined", "최신순": "Latest", "인기순": "Popular", "오래된순": "Oldest",
    "이 영상 보관": "Archive Video", "이 영상 삭제": "Delete Video", "내 영상 더보기": "More", "참가 영상": "Entries",
    "마라톤": "Marathon", "숏드라마": "Short Drama", "홈": "Home", "숏폼": "Shorts", "라이브": "Live", "포인트": "Points", "프로필": "Profile",
    "알림 설정": "Notification Settings", "검색": "Search", "SEASON 1 · 시즌 대회": "SEASON 1 · Season races"
  };
  var SENT = {
    "마라톤 챌린지에 영상을 올리면 바로 스탬프를 받아요.": "Upload to a marathon challenge to earn a stamp.",
    "영상에는 얼굴과 배번호 또는 대회 인증 요소가 함께 담겨야 해요": "Show your face and bib (or a race marker) in one video",
    "본인이 출연한 영상이어야 해요 — 촬영은 다른 사람이 해도 괜찮아요": "You must appear in it — anyone can film",
    "타인 영상 · AI로 만든 영상은 인정되지 않아요": "Others' or AI-made videos don't count",
    "영상을 올리면 바로 참가 스코어와 스탬프를 받아요": "Get Entry Score and a stamp as soon as you upload",
    "받은 픽은 챌린지 종료 후 스코어에 더해져요": "Picks count after the challenge ends",
    "심사에서 미인정되면 받은 참가 스코어와 스탬프가 회수돼요": "Not accepted in review? Entry Score and stamp are taken back",
    "챌린지 기간 안에 영상을 내리면 참가가 취소되고, 받은 스코어와 스탬프도 함께 빠져요": "Taking down your video cancels your entry and its score",
    "스코어가 열리기 전에 참가한 마라톤 챌린지도 빠짐없이 합산돼요": "Entries made before scores opened all count",
    "스코어가 같으면 먼저 도달한 분이 상위예요": "Ties go to whoever got there first",
    "시드니에 가는 건 시즌 스코어 1위 한 명이에요": "Only the season's No.1 goes to Sydney",
    "12월 31일 자정에 마감하고, 1월 초에 최종 순위를 발표해요": "Closes at midnight Dec 31 · Final ranks in early Jan",
    "여권이 있어야 하고, 만 19세 미만은 보호자 동의가 필요해요": "Passport required · Under 19 needs guardian consent",
    "항공 · 숙소는 대회 일정에 맞춰 정해지고, 다른 사람에게 양도할 수 없어요": "Flights and hotel follow the race dates · Non-transferable",
    "대회 사정으로 일정 · 구성이 바뀔 수 있어요": "Schedule and package may change",
    "참가비는 챌린지당 500P예요": "500P per challenge",
    "영상을 내리거나 심사에서 미인정되어도 참가비는 돌려드리지 않아요": "No refund if you take it down or it's not accepted",
    "영상을 내린 뒤 다시 참가하면 참가비 500P를 다시 내요": "Joining again costs another 500P",
    "러닝스타 스코어 · 순위 · 시즌 코스를 준비하고 있어요. 스코어가 열리면 지금까지 참가한 마라톤 챌린지가 빠짐없이 반영돼요.": "Score, rank and Season Course are coming. Every race you've joined will count.",
    "시즌 중 1건 · 심사는 챌린지가 끝난 뒤 한 번만 진행돼요": "1 this season · Reviewed once, after each challenge",
    "이 챌린지는 참가하지 않은 것과 같이 처리돼요": "Counted as not entered",
    "원하는 챌린지에 참가하고 러닝스타에 도전하세요": "Join a race, go for Running Star",
    "러닝스타가 되면 시드니 마라톤에 보내드려요": "Become the Running Star — we'll fly you to Sydney"
  };
  var DT = {}; Object.keys(D).forEach(function (k) { DT[k.trim()] = D[k].trim(); });
  Object.assign(DT, { "참가자 수": "Number of participants", "총 픽 수": "Total picks", "참가자": "Participants", "순위별": "By rank", "기준 · 당겨서 새로고침": "as of · Pull to refresh", "2026 JTBC 서울 마라톤": "2026 JTBC Seoul Marathon" });
  Object.assign(DT, {"이숏챌":"Lee Shortchall","게시물":"Posts","팔로워":"Followers","팔로잉":"Following","매주 챌린지 하나씩 도전해요. 춤은 못 추지만 편집은 자신 있어요. 편집 프리셋…":"One challenge a week. Can’t dance, can edit. My editing presets…","더보기":"More","프로필 공유":"Share Profile","내 챌린지":"My Challenges","12개":"12","라이브":"LIVE","홈":"Home","숏폼":"Shorts","포인트":"Points","프로필":"Profile","아직 올린 영상이 없어요":"No videos yet","챌린지에 참가하거나 일상 영상을 올려보세요":"Enter a challenge, or post something from your day","영상 올리기":"Post a video","저장한 영상이 없어요":"Nothing saved yet","영상의 저장 버튼을 누르면 여기에 모여요":"Tap the bookmark on a video and it lands here","태그된 영상이 없어요":"No tagged videos","다른 사람이 나를 태그하고 내가 승인하면 여기에 보여요":"Videos show up here once someone tags you and you approve it","접기":"Less","ShortChall 앰배서더":"ShortChall Ambassador","ShortChall이 선정한 앰배서더예요.":"Chosen by ShortChall.","앰배서더는 앱에서 신청할 수 없어요":"There is no way to apply in the app","닫기":"Close","커버댄스하는 이숏챌입니다 안녕하세요 반갑습니다":"Lee Shortchall, cover dancer — nice to meet you","지수하루":"Jisoo Haru","매주 새 안무 커버 올려요. 챌린지 같이 하실 분 환영!":"New choreo cover every week. Want to do a challenge together?","참여한 챌린지":"Challenges entered","8개":"8","팔로우":"Follow","아직 영상이 없어요":"No videos yet","새 영상 알림":"New video alerts","이 계정이 영상을 올리면 알려드려요":"We’ll let you know when this account posts","이 계정 신고":"Report this account","jisoo_haru님 차단":"Block jisoo_haru","소개가 없어요":"No bio yet","차단 해제":"Unblock","차단한 계정이에요":"You blocked this account","영상과 댓글을 볼 수 없어요.":"You can't see their videos or comments.","차단을 해제하면 다시 볼 수 있어요.":"Unblock to see them again.","프로필 링크 공유":"Share profile link","프로필을 완성하세요":"Finish your profile","아이디":"Username","사진":"Photo","닉네임":"Nickname","소개":"Bio","프로필 편집":"Edit profile","진행중":"Open","심사중":"Under review","종료":"Finished","11개":"11","최신순":"Newest","K-POP 커버 댄스 챌린지":"K-pop Cover Dance","3일 남음":"Ends in 3 days","받은 픽":"Picks","한 입 먹방 챌린지":"One-Bite Mukbang","9월 12일 발표":"Results Sep 12","서울 마라톤 완주 챌린지":"Seoul Marathon Finish","3위":"3rd","2026년 8월":"Aug 2026","여름 밈 리액션 챌린지":"Summer Meme Reaction","2026년 7월":"Jul 2026","스터디 브이로그 챌린지":"Study Vlog","실격":"Disqualified","2026년 5월":"May 2026","규정 위반":"Rule violation","발표 후 공개":"Shown after results","1위":"1st","반려동물 자랑 챌린지":"Show Your Pet","2026년 6월":"Jun 2026","진행 중인 챌린지의 받은 픽 수는 발표 전까지 보이지 않아요":"Pick counts stay hidden until results are announced","1,024 팔로워":"1,024 Followers","128 팔로잉":"128 Following","아이디·닉네임 검색":"Search by username or nickname","맞팔로우":"Follow back","0 팔로워":"0 Followers","0 팔로잉":"0 Following","아직 팔로워가 없어요":"No followers yet","챌린지에 참가하면 사람들이 나를 찾아와요":"Enter a challenge and people will find you","챌린지 둘러보기":"Browse challenges","아직 팔로우한 사람이 없어요":"Not following anyone yet","마음에 든 크리에이터를 팔로우해보세요":"Follow a creator you like","jisoo_haru 팔로우를 취소할까요?":"Unfollow jisoo_haru?","이 계정의 새 영상이 홈 피드에 뜨지 않아요.":"Their new videos stop appearing in your Home feed.","다시 팔로우하면 바로 돌아와요.":"Follow again and they come right back.","팔로우 취소":"Unfollow","완료":"Done","사진 수정":"Change photo","인증":"Verification","앰배서더 배지":"Ambassador badge","활성":"Active","내 초대로 가입한 사람이 모은 포인트의 20%를 더 받아요":"You earn an extra 20% of the points collected by people who join through your invite","사용할 수 있는 아이디예요":"That username is available","아이디를 바꾸면 이전 링크가 끊겨요":"Changing your username breaks the old link","이미 공유한 프로필 링크가 더 이상 열리지 않아요.":"Profile links you already shared will stop working.","다음 변경은 9월 24일부터 할 수 있어요":"You can change it again from Sep 24","취소":"Cancel","바꾸기":"Change","이미 사용 중인 아이디예요":"That username is taken","9월 29일부터 바꿀 수 있어요":"You can change it again from Sep 29","150자까지 쓸 수 있어요":"150 characters maximum","계정 관리":"Account","로그인":"Sign-in","로그인 방법은 바꿀 수 없어요":"The sign-in method can't be changed","이메일":"Email","확인 완료":"Verified","로그인 기기":"Devices","데이터":"Data","데이터 내려받기":"Download my data","로그아웃":"Sign out","계정 삭제":"Delete account","계정을 삭제하면 영상·포인트·챌린지 참가 이력이 모두 지워지고 되돌릴 수 없어요":"Deleting your account erases your videos, points and challenge history for good","받을 수 있는 주소가 없어요":"No address we can reach","등록 필요":"Not set","카카오톡":"Kakao","카카오 계정에서 이메일을 받지 못했어요":"Kakao didn't give us an email address","등록된 주소가 없어요":"No address on file","비밀번호":"Password","설정":"Settings","계정":"Account","보관한 영상":"Archived videos","공개 범위":"Privacy","태그 관리":"Tagged videos","차단한 계정":"Blocked accounts","2명":"2","알림":"Notifications","알림 설정":"Notification settings","앱":"App","언어":"Language","한국어":"Korean","캐시 지우기":"Clear cache","정보":"About","공지사항":"Notices","고객센터":"Support","약관 및 정책":"Terms and policies","앱 버전":"App version","차단한 계정 검색":"Search blocked accounts","2개":"2","차단을 해제해도 자동으로 다시 팔로우되지는 않아요":"Unblocking doesn't restore the follow","대기 중 3개":"3 waiting","알림을 놓쳤다면 여기서 확인할 수 있어요":"If you missed the notification, they're here","거절":"Decline","승인":"Approve","자동 승인":"Auto-approve","팔로우한 사람":"People you follow","활동":"Activity","챌린지":"Challenges","소식":"News","오늘":"Today","님이 나를 태그했어요":"{handle} tagged you","3분 전":"3m ago","문의에 답변이 왔어요":"Your inquiry has a reply","5분 전":"5m ago","님이 새 영상을 올렸어요":"{handle} posted a new video","7분 전":"7m ago","님이 내 영상에 댓글을 남겼어요":"{handle} commented on your video","4시간 전":"4h ago","님 외 3명이 내 영상을 좋아해요":"{handle} and 3 others liked your video","6시간 전":"6h ago","님이 나를 팔로우했어요":"{handle} started following you","9시간 전":"9h ago","11시간 전":"11h ago","food_hyun님이 나를 태그했어요":"food_hyun tagged you","태그 승인":"Approve tag","고정":"Pinned","전체":"All","챌린지 참가비 정책이 바뀌어요":"Entry-fee policy is changing","2026년 9월 11일":"Sep 11, 2026","9월 25일부터 상금 챌린지 참가비가 영상 1개당 500P로 바뀌어요. 지금까지는 챌린지당 한 번만 냈어요.":"From Sep 25 the entry fee for prize challenges is 500P per video. Until now it was charged once per challenge.","한 챌린지에 영상을 여러 개 올리면 올린 만큼 참가비가 들어요. 9월 24일까지 올린 영상은 지금 방식대로 계산해요.":"Post several videos to one challenge and you pay for each. Videos posted up to Sep 24 are charged the old way.","바뀐 약관 전문은 설정 &gt; 약관 및 정책에서 볼 수 있어요.":"The full revised terms are under Settings &gt; Terms and policies.","1.8.2 업데이트 내역":"What’s new in 1.8.2","2026년 9월 8일":"Sep 8, 2026","새로 생긴 것":"New","고친 것":"Fixed","팔로우한 사람의 새 영상":"New videos from people you follow","받은 좋아요":"Likes","새 댓글":"New comments","나를 태그했을 때":"When someone tags you","새 팔로워":"New followers","마감 하루 전":"One day before closing","결과 발표":"Results","광고성 정보라 동의한 분에게만 보내요":"Marketing messages — only to people who opted in","항상 받는 알림":"Always on","항상 받음":"Always on","문의 답변":"Inquiry replies","내가 보낸 문의에 답변이 달렸을 때":"When your inquiry gets a reply","끌 수 없어요 — 놓치면 상금을 받지 못하거나 바뀐 정책을 알 수 없어요":"These can't be turned off — missing one can cost you a prize or a policy change","이메일 설정":"Email settings","이 영상 보관":"Archive this video","어디에도 안 뜨게 해요":"Takes it down everywhere","이 영상 삭제":"Delete this video","🏆 먹방 챌린지":"🏆 Mukbang Challenge","이 영상을 보관할까요?":"Archive this video?","내 프로필 피드에서도 사라져요":"It leaves your profile feed too","챌린지 상세에서만 계속 보여요":"It stays on the challenge page","참가한 대회의 결과 화면이라 챌린지 상세에서는 내릴 수 없어요":"It's part of a contest result, so it can't be taken off the challenge page","보관하기":"Archive","1.2만":"12K","링크를 아는 사람도 볼 수 없어요":"Even a direct link stops working","이 영상을 삭제할까요?":"Delete this video?","어디에서도 볼 수 없어요":"It disappears everywhere","받은 픽 1,284개와 댓글이 함께 사라져요":"Its 1,284 picks and all comments go with it","되돌릴 수 없어요":"This cannot be undone","삭제하기":"Delete","픽하기":"Pick","챌린지 참가 영상만 챌린지 상세에 남아요":"Only challenge entries stay on the challenge page","1개":"1","보관한 영상이 없어요":"No archived videos","공유":"Share","보관 해제":"Unarchive","추천":"For You","이 영상 신고":"Report this video","jisoo_haru님을 차단할까요?":"Block jisoo_haru?","팔로우 관계가 해제돼요":"The follow is removed both ways","이 계정이 나를 태그한 영상이 모두 사라져요":"Every video where they tagged you disappears","차단하기":"Block","초대코드":"Invite code","내 초대코드로 가입하면 친구도 나도 1,000P":"You both get 1,000P when a friend joins with your code","초대 링크 공유":"Share invite link","내 픽":"My picks","픽 리워드":"Pick reward","8시간 11분 남음":"8h 11m left","마감 전까지 바꿀 수 있어요":"You can change them until it closes","상금을 보낼 주소가 필요해요":"We need an address to send the prize to","상금이 걸린 챌린지예요.":"This challenge has a prize.","발표 뒤에 본인 확인 안내를 메일로 보내요.":"After results we email you the identity-check steps.","카카오톡 로그인":"Kakao sign-in","이메일 등록하기":"Add email","최초 1회 등록 시 다음 챌린지부터는 묻지 않아요":"Add it once and we won't ask again","궁금한 내용을 검색해 보세요":"Search for what you need","자주 찾는 질문":"Common questions","챌린지 상금은 언제 받을 수 있나요?":"When do I get the prize money?","영상이 순위에 반영되지 않았어요":"My video isn’t in the ranking","포인트는 어디에 쓸 수 있나요?":"What can I spend points on?","픽하면 포인트를 받나요?":"Do I earn points for picking?","로그인이 안 돼요":"I can’t sign in","도움말 전체 보기":"See all help","내 문의":"My inquiries","문의하기":"Send an inquiry","결과가 발표되는 날에 보내드려요. 수령 정보를 발표 전날까지 등록하면 발표일 당일에 받을 수 있어요. 그 뒤에 등록하면 매주 화요일에 나눠 보내드리고, 등록 창구는 발표일부터 30일 동안 열려 있어요.":"We send it on the day results are announced. Register your payout details by the day before and it arrives on announcement day; register later and payouts go out every Tuesday. Registration stays open for 30 days from the announcement.","도움이 되었나요?":"Was this helpful?","예":"Yes","아니오":"No","어떤 문의인가요?":"What's it about?","고르면 필요한 내용만 물어봐요.":"Pick one and we'll only ask what we need.","상금이 안 왔거나 수령 정보가 틀렸을 때":"Prize not received, or wrong payout details","업로드 실패, 영상이 안 보일 때":"Upload failed, or a video not showing","그 밖의 문의":"Something else","보낸 문의와 답변을 볼 수 있어요":"See what you sent and what we replied","신고는 여기가 아니에요 — 영상과 프로필의 ⋮ 에서 신고해 주세요":"Reports do not go here — use ⋮ on the video or profile","어떤 챌린지인가요?":"Which challenge?","선택":"Select","가을 댄스 챌린지":"Autumn Dance Challenge","무슨 일이 있었나요?":"What happened?","언제, 어떤 화면에서 생긴 일인지 적어 주시면 더 빨리 확인할 수 있어요.":"Tell us when and on which screen it happened and we can check faster.","사진 첨부":"Photos","추가":"Add","함께 보내는 정보":"What's sent with this","답변을 빨리 드리려고 자동으로 보내요.":"Sent automatically so we can answer faster.","로그인 방법":"Sign-in method","기기":"Device","접속 국가":"Country","알겠어요":"Got it","문의를 접수했어요":"We've got your inquiry","2영업일 안에 답변드려요.":"We reply within 2 business days.","답변은 「내 문의」와 알림으로 알려드려요.":"You'll find the reply in My inquiries, and we'll notify you.","내 문의 보기":"View my inquiries","답변 완료":"Answered","가을 댄스 챌린지 상금이 아직 안 왔어요":"The Autumn Dance Challenge prize hasn’t arrived","답변 준비 중":"Working on it","업로드가 90%에서 멈춰요":"Uploads stall at 90%","취소됨":"Cancelled","카카오 로그인이 안 돼요":"Kakao sign-in doesn’t work","문의 상세":"Inquiry","가을 댄스 챌린지에서 3등을 했는데 상금이 아직 안 왔어요. 발표는 9월 4일이었어요.":"I came 3rd in the Autumn Dance Challenge but the prize hasn’t arrived. Results were on Sep 4.","9월 12일 10:05":"Sep 12, 10:05","확인해 보니 본인 확인이 아직 끝나지 않았어요. 안내 메일을 9월 5일에 보냈는데 도달하지 않았습니다. 설정 &gt; 계정 관리에서 받을 수 있는 주소를 등록해 주시면 다시 보내드릴게요.":"We checked: your identity verification isn’t finished. We sent the instructions on Sep 5 but they didn’t reach you. Add an address we can reach under Settings &gt; Account and we’ll send them again.","해결됐어요":"This is resolved","추가 문의":"Follow up","포인트가 안 들어왔어요.":"My points didn’t arrive.","답변이 오면 알림으로 알려드릴게요.":"We'll notify you when the reply arrives.","빠뜨린 내용은 덧붙일 수 있어요 — 문의 번호는 그대로예요":"You can add anything you left out — the inquiry number stays the same","문의 취소":"Cancel inquiry","지갑 정보":"wallet details","찾는 내용이 없어요":"Nothing matched","바로 문의하시면 2영업일 안에 답변드려요":"Send an inquiry and we'll reply within 2 business days","도움말":"Help","챌린지 참여":"Entering challenges","챌린지에 어떻게 참가하나요?":"How do I enter a challenge?","참가비 500P는 언제 빠지나요?":"When is the 500P entry fee taken?","참가를 취소하면 500P를 돌려받나요?":"Do I get the 500P back if I withdraw?","같은 영상을 여러 챌린지에 낼 수 있나요?":"Can I enter the same video in several challenges?","픽이 뭔가요? 좋아요와 다른가요?":"What is a pick? How is it different from a like?","픽은 몇 개까지 할 수 있나요?":"How many picks do I get?","진행 중에는 왜 픽 수가 안 보이나요?":"Why are pick counts hidden while a challenge runs?","마감 시간이 제가 본 것과 달라요":"The closing time doesn’t match what I saw","참가 가능 국가인데 참가가 안 돼요":"My country is eligible but I can’t enter","챌린지 결과는 언제 나오나요?":"When are challenge results announced?","상금 지급 기준":"Prize eligibility rules","에 맞지 않으면 순위에서 빠져요.":"— a video that does not meet them is taken out of the ranking.","영상은 프로필에 그대로 남아 있어요 — 삭제되지 않아요.":"The video stays on your profile — it is not deleted.","결과에 동의하기 어렵다면 안내를 받은 날부터 24시간 안에 이의를 신청할 수 있어요.":"If you disagree with the outcome you can appeal within 24 hours of being notified.","왜 순위에 반영되지 않나요?":"Why isn’t it in the ranking?","이의 신청은 어떻게 하나요?":"How do I appeal?","업로드가 실패했는데 500P가 빠졌어요":"The upload failed but 500P was taken","올린 영상을 수정할 수 있나요?":"Can I edit a video after posting?","로그인 계정":"Sign-in account","로그인 계정은 바꿀 수 없어요":"Your sign-in account can't be changed","연락받을 이메일":"Contact email","주소 바꾸기":"Change address","주소 등록하기":"Add an address","신고를 접수했어요":"Report received","상금 챌린지 관련이라 발표 전에 우선 검토하고, 검토 결과를 알림으로 알려드려요.":"This is tied to a prize challenge, so we review it before results and notify you of the outcome.","jisoo_haru님도 차단하기":"Block jisoo_haru too","검토하고 결과를 알림으로 알려드려요.":"We’ll review it and notify you of the outcome.","검토하는 동안 이 영상은 계속 보여요.":"The video stays visible while we review it.","다시 작성":"Write it again","내 영상":"My Video","오늘의 추천 영상":"Featured Today","추천 영상":"Featured","위로 밀어 다음 영상":"Swipe up for next","크리에이터 크루 S1":"Creator Crew S1","15명":"15","S1 크루":"S1 Crew","1월 – 3월":"Jan – Mar","시즌 기간":"Season","숏챌이 선정한 15명의 크리에이터예요.\n시즌 동안 링이 표시되고, 올린 영상이 피드에서 더 자주 추천돼요.":"15 creators picked by ShortChall.\nYou get a season ring and extra reach in the feed.","크루 모집은 공지사항에서 안내해요":"Crew recruiting is announced in Notices","크루 시즌 1에 선정됐어요. 프로필에 링이 표시되고 영상이 피드에서 더 자주 추천돼요.":"You're in Crew Season 1. You get a season ring and extra reach in the feed.","내 영상이 오늘의 추천 영상에 실렸어요.":"Your video is featured today.","아침 6시에 일어나서 30일 동안 루틴을 지켜본 기록이에요. 침대 정리하고 아침 5분 스트레칭 루틴하고 따뜻한 물 한 잔 마시는 순서만 지키니까 하루가 훨씬 길어지는 기분이에요. 오늘은 처음으로 샤워 후 스트레칭까지 다 마치고 출근했습니다. 다음 주부터는 산책도 추가해볼 생각이에요 — 같이 하실 분 계신가요? #모닝루틴 #미라클모닝 #하루브이로그":"30 days of waking up at 6 and sticking to the routine. Make the bed, 5 minutes of stretching, a glass of warm water — just keeping that order makes the day feel longer. Today I finished stretching after my shower before work for the first time. Adding a walk next week — anyone in? #morningroutine #miraclemorning #dailyvlog","데일리룩 OOTD 챌린지 세 번째 참가예요. 이번엔 장마철 느낌을 살리고 싶어서 이 각도가 제일 잘 나와요 바꿔 입었고, 전환은 무보정 샷으로 넘겼습니다. 거울 없이 셀카로 찍는 게 핵심이에요. 톤 보정은 살짝만 올리고 대부분 원본 그대로 뒀습니다 #OOTD #초여름코디 #데일리룩":"Third entry for the OOTD challenge. Went for a rainy-season mood this time — this angle works best — and did the transition in one unedited shot. The trick is shooting selfies without a mirror. Barely touched the color, mostly original #OOTD #earlysummer #dailylook","편의점 신상 디저트 다 먹어봤어요":"Tried every new convenience-store dessert","신곡 챌린지 우리 팀이 최초 공개해요":"Our team's first take on the new song challenge","데일리":"daily","트랜지션":"transition","동네맛집":"localeats","슈퍼노바챌린지":"supernovachallenge","편집":"editing","데일리룩 OOTD 챌린지":"Daily Look OOTD","먹방 챌린지":"Mukbang Challenge","최애 챌린지":"Bias Challenge","오늘의 안무 커버 같이 추실 분":"Who's dancing today's cover with me?","4인 버전으로 다시 맞춰봤어요":"Redid it as a 4-person version","편집 프리셋 공유해요 — 전환 3초 컷":"Sharing my editing preset — 3-second transitions","편의점 신상 한 번에 다 먹어보기":"Eating every new convenience-store item at once","방금":"Just now","12분 전":"12m ago","1시간 전":"1h ago","48초 전":"48s ago","라이브 참가하기":"Join Live","프로필 보기":"View profile","크리에이터":"Creator","이전":"Back","챌린지 · 크리에이터 검색":"Search challenges · creators"});
  Object.assign(DT, {"민지로그":"Minji Log","곰이츠":"Gom Eats","하루":"Haru","민트초코":"Mint Choco","카리스마 제이엠":"Charisma JM","챠챠":"Chacha","써니바이브":"Sunny Vibes","남열":"Namyeol","반달":"Bandal","민지":"Minji","곰이먹방":"Gom Mukbang","채채":"Chaechae","써니":"Sunny"});
  Object.keys(DT).forEach(function (k) { if (/\{[a-z]+\}/i.test(DT[k])) DT[k] = DT[k].replace(/\{[a-z]+\}\s*/gi, "").trim(); });
  Object.assign(DT, { "상금 · 수령": "Prize · Payout" });
  Object.assign(DT, { "님이 나를 태그했어요": " tagged you", "님이 새 영상을 올렸어요": " posted a new video", "님이 내 영상에 댓글을 남겼어요": " commented on your video", "님 외 3명이 내 영상을 좋아해요": " and 3 others liked your video", "님이 나를 팔로우했어요": " started following you",
    "크루 시즌 1이 끝났어요. 링과 크루 표시는 오늘부터 사라져요. 시즌 2 모집은 공지사항에서 안내해요.": "Crew Season 1 has ended. Your ring and crew tag are gone from today. Season 2 recruiting is in Notices" });
  // 부분 문자열 치환 (긴 것부터)
  var P = [
    ["러닝스타 스코어 · 시즌 코스 ", "Running Star Score · Season Course "],
    ["까지 영상을 내리면 참가가 취소돼요", " — taking it down by then cancels your entry"],
    ["까지 다시 참가할 수 있어요", ""],
    [" 챌린지가 끝나면 심사해요", ""],
    ["받은 픽은 ", "Picks count after "],
    [" 챌린지 종료 후 더해져요. 심사에서 미인정되면 스코어와 스탬프가 회수돼요.", ". Not accepted in review? Score and stamp are taken back."],
    ["에서 받은 것들이 함께 사라져요", ""],
    ["영상을 내리면 ", "You'll lose the "], ["도 사라져요", " too"],
    ["스탬프가 ", "Stamps drop below "], ["개 아래로 내려가요", ""],
    ["심사 중 · 결과는 스코어 내역에서 확인할 수 있어요", "In Review · See the result in Score History"],
    ["챌린지가 끝나 영상을 내릴 수 없어요", "Can't take it down after it ends"],
    ["심사에서 인정됐어요", "Accepted"], ["개가 스코어에 더해졌어요", " picks added to your score"],
    ["영상을 내렸어요 · 스코어 ", "Video taken down · −"], ["점이 빠졌어요", ""],
    ["개 더 참가하면 3,000점이 한 번에 들어와요", " more for +3,000"], ["개 더 참가하면 6,000점이 한 번에 들어와요", " more for +6,000"],
    ["3회 달성으로 +3,000점을 받았어요", "+3,000 for 3 entries"],
    ["에 시작해요 · 대회 날 찍은 영상을 이때부터 올릴 수 있어요", " · Upload your race video from then"],
    [" · 시작 전", " · Not Started"], [" 시작", ""],
    ["앱 활동 회수", "App Activity taken back"], ["적립 취소", "Points canceled"],
    ["받은 포인트 ", ""], [" · 일일 최대 도달", " · Daily max"], [" · 쌓이는 중", " · In progress"],
    ["챌린지 종료 · ", "Challenge ended · "], ["참가 3개 × 3,000점 · 1개는 심사 중이에요", "3 × 3,000 · 1 in review"],
    ["참가 2개 × 3,000점", "2 × 3,000"], ["챌린지가 끝난 대회 1개", "1 race done"], [" · 오늘 ", " · Today "],
    ["17위까지 ", "To No.17 "], [" 올림 · 픽 ", " uploaded · Picks "],
    ["1,032명 참가 중", "1,032 joined"], ["1,032명 참가 · 조회 128K", "1,032 joined · 128K views"],
    [" 현장을 달리는 순간을 영상으로 남겨주세요.", ": film your run on race day."], ["1등 ", "1st "], [" · 리더보드 가산점", " · Leaderboard bonus"],
    ["참가 가능 ", ""], ["받은 픽 ", "Picks "], ["참가 스코어", "Entry Score"], ["시즌 코스 스탬프", "Season Course"], ["받은 픽", "Picks"],
    ["달성 보너스", "-Entry Bonus"], ["번째 스탬프", " stamp"], ["마감까지 ", "Ends in "], ["Top 5까지 ", "To Top 5 "], ["당겨서 새로고침", "Pull to refresh"],
    ["평창 · 동계올림픽기념공원", "Pyeongchang · Olympic Memorial Park"], ["서울 마포 · 상암 평화의공원", "Seoul Mapo · Sangam Peace Park"],
    ["서울 · 올림픽공원", "Seoul · Olympic Park"], ["인천 · 영종도 왕산마리나", "Incheon · Wangsan Marina"], ["세종 · 중앙공원 도시축제마당", "Sejong · Central Park"],
    ["성남 · 탄천종합운동장", "Seongnam · Tancheon Stadium"], ["인천 · 상상플랫폼", "Incheon · Sangsang Platform"], ["서울 · 서울어린이대공원", "Seoul · Children's Grand Park"],
    ["하남 · 미사경정공원", "Hanam · Misa Regatta Park"],
    ["앱 활동", "App Activity"], ["3회 달성 보너스", "3-Entry Bonus"], ["6회 달성 보너스", "6-Entry Bonus"], ["SEASON 1 누적", "Season 1 total"],
    ["GO대관령 국제 트레일런", "3rd GO Daegwallyeong Int'l Trail Run"], ["런센스 2026", "Run Sense 2026"], ["해리포터런 2026", "Harry Potter Run 2026"],
    ["한글런 2026", "Hangeul Run 2026"], ["카카오프렌즈런 2026", "Kakao Friends Run 2026"], ["디즈니런 2026 인천", "Disney Run 2026 Incheon"],
    ["용감한 쿠키RUN in 서울 2026", "Brave Cookie RUN in Seoul 2026"], ["쥬라기파크런 2026", "Jurassic Park Run 2026"], ["한국", "Korea"], [" · 종료", " · Ended"], ["명", ""], ["줄", ""]
  ];
  P.push.apply(P, [["#슈퍼노바챌린지","#supernovachallenge"],["#동네맛집","#localeats"],["#모닝루틴","#morningroutine"],["#미라클모닝","#miraclemorning"],["#하루브이로그","#dailyvlog"],["#초여름코디","#earlysummer"],["#데일리룩","#dailylook"],["#편집","#editing"],["#데일리","#daily"],["#트랜지션","#transition"]]);
  P.push(["상금 · 수령", "Prize · Payout"]);
  P.sort(function (a, b) { return b[0].length - a[0].length; });
  var MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var DOW = { "일": "Sun", "월": "Mon", "화": "Tue", "수": "Wed", "목": "Thu", "금": "Fri", "토": "Sat" };
  var ord = function (n) { n = +n; var s = ["th", "st", "nd", "rd"], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); };
  function tr(s) {
    var t = s.trim(); if (!t || !/[가-힣]/.test(t)) return s;
    if (DT[t] != null) return s.replace(t, DT[t]);
    var r = t;
    var cF = /^(.+)님을 팔로우했어요$/.exec(t); if (cF) return s.replace(t, "You're following " + cF[1]);
    var cN = /^(\d+)명을 팔로우했어요$/.exec(t); if (cN) return s.replace(t, "Following " + cN[1] + " creators");
    var cA = /^(\d+)명 모두 팔로우$/.exec(t); if (cA) return s.replace(t, "Follow all " + cA[1]);
    var cR = /^남은 (\d+)명 팔로우$/.exec(t); if (cR) return s.replace(t, "Follow " + cR[1] + " more");
    var mOpen = /^참가 가능 (\d+)개$/.exec(t); if (mOpen) return s.replace(t, mOpen[1] + " Open");
    var mStart = /^(\d+)월 (\d+)일 시작$/.exec(t); if (mStart) return s.replace(t, "Starts " + MON[mStart[1] - 1] + " " + mStart[2]);
    var mStart2 = /^(\d+)월 (\d+)일에 시작해요 · 대회 날 찍은 영상을 이때부터 올릴 수 있어요$/.exec(t); if (mStart2) return s.replace(t, "Starts " + MON[mStart2[1] - 1] + " " + mStart2[2] + " · Upload your race video from then");
    var mRev = /^(\d+)월 (\d+)일 챌린지가 끝나면 심사해요$/.exec(t); if (mRev) return s.replace(t, "Reviewed after " + MON[mRev[1] - 1] + " " + mRev[2]);
    var mBy = /^(\d+)월 (\d+)일까지 다시 참가할 수 있어요$/.exec(t); if (mBy) return s.replace(t, "Join again by " + MON[mBy[1] - 1] + " " + mBy[2]);
    var mBy2 = /^(\d+)월 (\d+)일까지 다시 참가할 수 있고, 이때 참가비 500P를 다시 내요\.$/.exec(t); if (mBy2) return s.replace(t, "Join again by " + MON[mBy2[1] - 1] + " " + mBy2[2] + " for 500P.");
    var mCap = /^#(.+) 참가 영상$/.exec(t); if (mCap) return s.replace(t, "#" + tr(mCap[1]).trim() + " entry");
    var mRem = /^(.+)에서 받은 것들이 함께 사라져요$/.exec(t); if (mRem) return s.replace(t, "You'll lose everything from " + tr(mRem[1]).trim());
    r = r.replace(/(\d{4})년\s*(\d+)월\s*(\d+)일/g, function (m, y, mo, d) { return MON[mo - 1] + " " + d + ", " + y; });
    r = r.replace(/(\d+)월\s*(\d+)일\s*\(([일월화수목금토])\)/g, function (m, mo, d, w) { return DOW[w] + ", " + MON[mo - 1] + " " + d; });
    r = r.replace(/(\d+)월\s*(\d+)일/g, function (m, mo, d) { return MON[mo - 1] + " " + d; });
    for (var i = 0; i < P.length; i++) if (r.indexOf(P[i][0]) >= 0) r = r.split(P[i][0]).join(P[i][1]);
    r = r.replace(/(\d+)일\s*(\d+)시간/g, "$1d $2h").replace(/(\d+)시간\s*(\d+)분/g, "$1h $2m")
      .replace(/(\d+)일 남음/g, "$1 days left").replace(/(\d+)일 남았어요/g, "$1 days left").replace(/(\d+)시간 남음/g, "$1h left")
      .replace(/(\d+)위/g, "No.$1").replace(/([\d,]+)점/g, "$1").replace(/([\d,]+)개/g, "$1")
      .replace(/([\d,]+)픽/g, "$1 picks").replace(/([\d,]+)편/g, "$1").replace(/(\d+)회/g, "$1 entries").replace(/([\d,]+)P → ([\d,]+)P/g, "$1P → $2P").replace(/(\d+)개 → (\d+)개/g, "$1 → $2").replace(/(\d+)일$/g, "$1 days").replace(/(\d+)건/g, "$1").replace(/(\d+(?:\.\d+)?)천/g, "$1K").replace(/(\d+(?:\.\d+)?)만/g, function (m, n) { return Math.round(parseFloat(n) * 10) + "K"; }).replace(/^이의 신청 /, "Appeal · ")
      .replace(/^점$/, "").replace(/^위$/, "").replace(/(\d+)일 남았어요/g, "$1 days left").replace(/ 기준/g, "").replace(/·\s*·/g, "·");
    if (/[가-힣]/.test(r)) { (window.__enMiss = window.__enMiss || {})[t] = 1; }
    return s.replace(t, r);
  }
  var norm = function (x) { return String(x || "").replace(/\s+/g, " ").trim(); };
  var ORIG = new WeakMap(), SETV = new WeakMap();
  var otxt = function (n) { return ORIG.has(n) ? ORIG.get(n) : n.nodeValue; };
  var hiddenIn = function (n, el) { for (var p = n.parentNode; p && p !== el; p = p.parentNode) { if (p.style && p.style.display === "none") return true; } return false; };
  var skipTag = function (n) { var p = n.parentNode; return !p || /^(SCRIPT|STYLE|TEMPLATE|NOSCRIPT)$/.test(p.nodeName); };
  function sentPass(root) {
    if (!root || !root.querySelectorAll) return;
    var els = Array.prototype.slice.call(root.querySelectorAll("span,div,p,button"));
    if (root.nodeType === 1) els.unshift(root);
    for (var i = 0; i < els.length; i++) {
      var el = els[i]; if (!el.children.length || !el.isConnected) continue;
      var tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null), tn, nodes = [];
      while ((tn = tw.nextNode())) { if (!skipTag(tn) && !hiddenIn(tn, el)) nodes.push(tn); }
      if (nodes.length < 2) continue;
      var t = norm(nodes.map(otxt).join("")); if (!/[가-힣]/.test(t)) continue;
      var val = SENT[t] != null ? SENT[t] : null;
      var mr = val == null && /^(\d+)\s*위$/.exec(t); if (mr) val = "No." + mr[1];
      var mc = val == null && /^마라톤 챌린지에 (\d+)회 참가하면 이 칸(?:과 (.+?))?을 받아요\.$/.exec(t);
      if (mc) val = "Join " + mc[1] + " marathon challenges to fill this spot" + (mc[2] ? " and get the " + tr(mc[2]).trim() : "") + ".";
      if (val == null) continue;
      var first = true;
      nodes.forEach(function (n) { if (!ORIG.has(n)) ORIG.set(n, n.nodeValue); if (!otxt(n).trim()) return; var v = first ? val : ""; first = false; n.nodeValue = v; SETV.set(n, v); });
    }
  }
  function trNode(n) {
    if (skipTag(n)) return;
    if (SETV.has(n) && SETV.get(n) === n.nodeValue) return;
    var o = n.nodeValue; if (!/[가-힣]/.test(o)) return;
    var v = tr(o); if (v !== o) { ORIG.set(n, o); n.nodeValue = v; SETV.set(n, v); }
  }
  function walk(root) {
    sentPass(root);
    if (root.nodeType === 3) { trNode(root); return; }
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n, list = [];
    while ((n = w.nextNode())) list.push(n);
    list.forEach(trNode);
  }
  var started = false;
  window.__enStart = function () {
    if (started) return; started = true;
    document.documentElement.lang = "en";
    var run = function () { walk(document.body); };
    run();
    var opts = { childList: true, subtree: true, characterData: true };
    var obs = new MutationObserver(function (ms) {
      obs.disconnect();
      try {
        ms.forEach(function (m) {
          if (m.type === "characterData") {
            var n = m.target; if (skipTag(n)) return;
            if (SETV.has(n) && SETV.get(n) === n.nodeValue) return;
            ORIG.set(n, n.nodeValue); SETV.delete(n);
            var anc = n.parentNode; for (var k = 0; k < 4 && anc && anc.parentNode && anc.parentNode !== document.body; k++) anc = anc.parentNode;
            sentPass(anc);
            trNode(n);
          } else m.addedNodes.forEach(function (a) {
            if (a.nodeType === 3) { var anc2 = a.parentNode; for (var k2 = 0; k2 < 4 && anc2 && anc2.parentNode && anc2.parentNode !== document.body; k2++) anc2 = anc2.parentNode; sentPass(anc2); trNode(a); }
            else if (a.nodeType === 1) { var anc3 = a.parentNode; for (var k3 = 0; k3 < 3 && anc3 && anc3.parentNode && anc3.parentNode !== document.body; k3++) anc3 = anc3.parentNode; sentPass(anc3 || a); walk(a); }
          });
        });
      } catch (e) {}
      obs.observe(document.body, opts);
    });
    obs.observe(document.body, opts);
  };
  if (/%22lang%22%3A%22en%22|"lang":"en"/.test(location.hash)) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(window.__enStart, 80); }); else setTimeout(window.__enStart, 80);
  }
})();
