
document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([43.5, 142.8], 7);
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    const locations = [
        // 삿포로 & 근교
        { name: '오도리 공원', lat: 43.0603, lng: 141.3516, category: '삿포로', description: '삿포로 중심부의 공원으로 사계절 내내 다양한 축제가 열립니다.', hours: '24시간 개방', admission: '무료', website: 'https://www.sapporo.travel/spot/facility/odori_park/', nearbyHotels: [
            { name: 'JR타워 호텔 닛코 삿포로', link: 'https://maps.google.com/maps/place/JR+Tower+Hotel+Nikko+Sapporo/@43.0683,141.3506,17z' },
            { name: '삿포로 그랜드 호텔', link: 'https://maps.google.com/maps/place/Sapporo+Grand+Hotel/@43.0593,141.3515,17z' }
        ] },
        { name: '삿포로 TV 타워', lat: 43.061, lng: 141.356, category: '삿포로', description: '오도리 공원 동쪽 끝에 위치한 삿포로의 랜드마크입니다.', hours: '09:00 - 22:00', admission: '성인 1,000엔', website: 'https://www.tv-tower.co.jp/', nearbyHotels: [
            { name: 'JR타워 호텔 닛코 삿포로', link: 'https://maps.google.com/maps/search/JR%E3%82%BF%E3%83%AF%E3%83%BC%E3%83%9B%E3%83%86%E3%83%AB%E3%83%8B%E3%83%83%E3%82%B3%E3%83%BC%E6%9C%AD%E5%B9%8C%20%EC%82%BF%ED%8F%AC%EB%A1%9C+北海道' },
            { name: '삿포로 그랜드 호텔', link: 'https://maps.google.com/maps/search/%E6%9C%AD%E5%B9%8C%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%83%9B%E3%83%86%E3%83%AB%20%EC%82%BF%ED%8F%AC%EB%A1%9C+北海道' }
        ] },
        { name: '스스키노', lat: 43.055, lng: 141.354, category: '삿포로', description: '홋카이도 최대의 번화가로, 수많은 맛집과 상점이 밀집해 있습니다.', hours: '24시간 (상점별 상이)', admission: '무료', website: 'https://www.sapporo.travel/spot/susukino/', nearbyHotels: [
            { name: '호텔 오쿠라 삿포로', link: 'https://maps.google.com/maps/search/%E3%83%9B%E3%83%86%E3%83%AB%E3%82%AA%E3%83%BC%E3%82%AF%E3%83%A9%E6%9C%AD%E5%B9%8C%20%EC%82%BF%ED%8F%AC%EB%A1%9C+北海道' },
            { name: '프리미어 호텔 나카지마코엔', link: 'https://maps.google.com/maps/search/%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%9B%E3%83%86%E3%83%AB%E4%B8%AD%E5%B3%B6%E5%85%AC%E5%9C%92+北海道' }
        ] },
        { name: '시로이코이비토 파크', lat: 43.0865, lng: 141.2739, category: '삿포로', description: "유명 과자 '시로이 코이비토'의 테마파크로, 유럽풍 건물이 인상적입니다.", hours: '10:00 - 17:00', admission: '무료 (일부 유료)', website: 'https://www.shiroikoibitopark.jp/', nearbyHotels: [
            { name: '라마다 삿포로', link: 'https://maps.google.com/maps/search/%E3%83%A9%E3%83%9E%E3%83%80%E6%9C%AD%E5%B9%8C' },
            { name: '호텔 에미시아 삿포로', link: 'https://maps.google.com/maps/search/%E3%83%9B%E3%83%86%E3%83%AB%E3%82%A8%E3%83%9F%E3%82%B7%E3%82%A2%E6%9C%AD%E5%B9%8C%20%EC%82%BF%ED%8F%AC%EB%A1%9C+北海道' }
        ] },
        { name: '삿포로 맥주 박물관', lat: 43.0712, lng: 141.3682, category: '삿포로', description: '삿포로 맥주의 역사와 제조 과정을 배우고 시음도 할 수 있습니다.', hours: '11:00 - 17:00', admission: '무료 (시음 유료)', website: 'https://www.sapporobeer.jp/brewery/s_museum/', nearbyHotels: [
            { name: '삿포로 가든 팰리스', link: 'https://maps.google.com/maps/search/札幌+ガーデンパレス+ホテル' },
            { name: '호텔 몬테 에르마나 삿포로', link: 'https://maps.google.com/maps/search/%E3%83%9B%E3%83%86%E3%83%AB%E3%83%A2%E3%83%B3%E3%83%86%E3%82%A8%E3%83%AB%E3%83%9E%E3%83%BC%E3%83%8A%E6%9C%AD%E5%B9%8C%20%EC%82%BF%ED%8F%AC%EB%A1%9C+北海道' }
        ] },
        { name: '모에레누마 공원', lat: 43.1233, lng: 141.4278, category: '삿포로', description: '조각가 이사무 노구치가 설계한 예술적인 공원입니다.', hours: '07:00 - 22:00', admission: '무료', website: 'https://moerenumapark.jp/', nearbyHotels: [
            { name: '아파 호텔 삿포로', link: 'https://maps.google.com/maps/search/%E3%82%A2%E3%83%91%E3%83%9B%E3%83%86%E3%83%AB%E6%9C%AD%E5%B9%8C%20%EC%82%BF%ED%8F%AC%EB%A1%9C+北海道' },
            { name: '돔 인 삿포로', link: 'https://maps.google.com/maps/search/%E3%83%89%E3%83%BC%E3%83%9F%E3%83%BC%E3%82%A4%E3%83%B3%E6%9C%AD%E5%B9%8C' }
        ] },
        { name: '홋카이도 신궁', lat: 43.0536, lng: 141.3536, category: '삿포로', description: '홋카이도를 대표하는 신사로, 벚꽃 명소로도 유명합니다.', hours: '06:00 - 17:00', admission: '무료', website: 'https://www.hokkaidojingu.or.jp/', nearbyHotels: [
            { name: '프리미어 호텔 나카지마코엔', link: 'https://maps.google.com/maps/search/%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%9B%E3%83%86%E3%83%AB%E4%B8%AD%E5%B3%B6%E5%85%AC%E5%9C%92+北海道' },
            { name: '삿포로 뷰 호텔', link: 'https://maps.google.com/maps/search/%E6%9C%AD%E5%B9%8C%E3%83%93%E3%83%A5%E3%83%BC%E3%83%9B%E3%83%86%E3%83%AB%20%EC%82%BF%ED%8F%AC%EB%A1%9C+北海道' }
        ] },
        { name: '나카지마 공원', lat: 43.0533, lng: 141.3500, category: '삿포로', description: '시내 중심가에 위치한 아름다운 공원으로 가을 단풍이 절경입니다.', hours: '24시간 개방', admission: '무료', website: 'https://www.sapporo-park.or.jp/nakajima/', nearbyHotels: [
            { name: '프리미어 호텔 나카지마코엔', link: 'https://maps.google.com/maps/search/%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%9B%E3%83%86%E3%83%AB%E4%B8%AD%E5%B3%B6%E5%85%AC%E5%9C%92+北海道' },
            { name: '호텔 오쿠라 삿포로', link: 'https://maps.google.com/maps/search/%E3%83%9B%E3%83%86%E3%83%AB%E3%82%AA%E3%83%BC%E3%82%AF%E3%83%A9%E6%9C%AD%E5%B9%8C%20%EC%82%BF%ED%8F%AC%EB%A1%9C+北海道' }
        ] },
        { name: '니조 시장', lat: 43.0633, lng: 141.3611, category: '삿포로', description: '신선한 해산물과 홋카이도 특산품을 맛볼 수 있는 전통 시장입니다.', hours: '07:00 - 18:00', admission: '무료', website: 'https://www.nijo-ichiba.com/', nearbyHotels: [
            { name: '삿포로 그랜드 호텔', link: 'https://maps.google.com/maps/search/%E6%9C%AD%E5%B9%8C%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%83%9B%E3%83%86%E3%83%AB%20%EC%82%BF%ED%8F%AC%EB%A1%9C+北海道' },
            { name: 'JR타워 호텔 닛코 삿포로', link: 'https://maps.google.com/maps/search/JR%E3%82%BF%E3%83%AF%E3%83%BC%E3%83%9B%E3%83%86%E3%83%AB%E3%83%8B%E3%83%83%E3%82%B3%E3%83%BC%E6%9C%AD%E5%B9%8C%20%EC%82%BF%ED%8F%AC%EB%A1%9C+北海道' }
        ] },
        { name: '삿포로 돔', lat: 43.0153, lng: 141.4094, category: '삿포로', description: '야구와 축구 경기가 열리는 최첨단 다목적 돔 구장입니다.', hours: '10:00 - 17:00 (투어)', admission: '투어 성인 500엔', website: 'https://www.sapporo-dome.co.jp/', nearbyHotels: [
            { name: '호텔 에미시아 삿포로', link: 'https://maps.google.com/maps/search/%E3%83%9B%E3%83%86%E3%83%AB%E3%82%A8%E3%83%9F%E3%82%B7%E3%82%A2%E6%9C%AD%E5%B9%8C%20%EC%82%BF%ED%8F%AC%EB%A1%9C+北海道' },
            { name: '메르큐르 호텔 삿포로', link: 'https://maps.google.com/maps/search/%E3%83%A1%E3%83%AB%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%AB%E3%83%9B%E3%83%86%E3%83%AB%E6%9C%AD%E5%B9%8C%20%EC%82%BF%ED%8F%AC%EB%A1%9C+北海道' }
        ] },

        // 오타루
        { name: '오타루 운하', lat: 43.1981, lng: 141.0031, category: '오타루', description: '가스등이 켜진 낭만적인 분위기의 운하입니다.', hours: '24시간 개방', admission: '무료', website: 'https://otaru.gr.jp/tourist/otaru-canal', nearbyHotels: [
            { name: '오타루 후루카와 호텔', link: 'https://maps.google.com/maps/search/%E5%B0%8F%E6%A8%BD%E3%81%B5%E3%82%8B%E3%81%8B%E3%82%8F%E3%83%9B%E3%83%86%E3%83%AB%20%EC%98%A4%ED%83%80%EB%A3%A8+北海道' },
            { name: '호텔 노르드 오타루', link: 'https://maps.google.com/maps/search/%E3%83%9B%E3%83%86%E3%83%AB%E3%83%8E%E3%83%AB%E3%83%89%E5%B0%8F%E6%A8%BD%20%EC%98%A4%ED%83%80%EB%A3%A8+北海道' }
        ] },
        { name: '오타루 오르골당', lat: 43.192, lng: 141.007, category: '오타루', description: '다양하고 아름다운 오르골을 만날 수 있는 곳입니다.', hours: '09:00 - 18:00', admission: '무료', website: 'https://www.otaru-orgel.co.jp/', nearbyHotels: [
            { name: '오타루 운가노야도', link: 'https://maps.google.com/maps/search/%E5%B0%8F%E6%A8%BD%E9%81%8B%E6%B2%B3%E3%81%AE%E5%AE%BF' },
            { name: '호텔 빌라 이나바', link: 'https://maps.google.com/maps/search/%E3%83%9B%E3%83%86%E3%83%AB%E3%83%B4%E3%82%A3%E3%83%A9%E3%82%A4%E3%83%8A%E3%83%90+北海道' }
        ] },
        { name: '덴구야마', lat: 43.1886, lng: 140.9842, category: '오타루', description: '오타루 시내와 이시카리만을 한눈에 내려다볼 수 있는 전망 명소입니다.', hours: '09:00 - 21:00', admission: '로프웨이 왕복 성인 1,400엔', website: 'https://tenguyama.ckk.chuo-bus.co.jp/', nearbyHotels: [
            { name: '오타루 코쿠사이 호텔', link: 'https://maps.google.com/maps/search/%E5%B0%8F%E6%A8%BD%E5%9B%BD%E9%9A%9B%E3%83%9B%E3%83%86%E3%83%AB%20%EC%98%A4%ED%83%80%EB%A3%A8+北海道' },
            { name: '오타루 후루카와 호텔', link: 'https://maps.google.com/maps/search/%E5%B0%8F%E6%A8%BD%E3%81%B5%E3%82%8B%E3%81%8B%E3%82%8F%E3%83%9B%E3%83%86%E3%83%AB%20%EC%98%A4%ED%83%80%EB%A3%A8+北海道' }
        ] },
        { name: '오타루 아쿠아리움', lat: 43.1586, lng: 141.0322, category: '오타루', description: '250종 이상의 해양생물을 만날 수 있는 북방 최대의 수족관입니다.', hours: '09:00 - 17:00', admission: '성인 1,500엔', website: 'https://otaru-aq.jp/', nearbyHotels: [
            { name: '윙베이 오타루 호텔', link: 'https://maps.google.com/maps/search/%E3%82%A6%E3%82%A4%E3%83%B3%E3%82%B0%E3%83%99%E3%82%A4%E5%B0%8F%E6%A8%BD%E3%83%9B%E3%83%86%E3%83%AB%20%EC%98%A4%ED%83%80%EB%A3%A8+北海道' },
            { name: '호텔 쇼 오타루', link: 'https://maps.google.com/maps/search/%E3%83%9B%E3%83%86%E3%83%AB%E7%BF%94%E5%B0%8F%E6%A8%BD%20%EC%98%A4%ED%83%80%EB%A3%A8+北海道' }
        ] },
        { name: '키타이치 유리', lat: 43.1926, lng: 141.0064, category: '오타루', description: '아름다운 유리 공예품을 구경하고 구매할 수 있는 유리 공방입니다.', hours: '08:45 - 18:00', admission: '무료', website: 'https://kitaichi-glass.co.jp/', nearbyHotels: [
            { name: '오타루 운가노야도', link: 'https://maps.google.com/maps/search/%E5%B0%8F%E6%A8%BD%E9%81%8B%E6%B2%B3%E3%81%AE%E5%AE%BF' },
            { name: '호텔 노르드 오타루', link: 'https://maps.google.com/maps/search/%E3%83%9B%E3%83%86%E3%83%AB%E3%83%8E%E3%83%AB%E3%83%89%E5%B0%8F%E6%A8%BD%20%EC%98%A4%ED%83%80%EB%A3%A8+北海道' }
        ] },
        
        // 하코다테
        { name: '하코다테산 전망대', lat: 41.7651, lng: 140.7065, category: '하코다테', description: '세계 3대 야경으로 꼽히는 하코다테의 야경을 감상할 수 있습니다.', hours: '10:00 - 22:00 (계절별 변동)', admission: '왕복 케이블카 성인 1,500엔', website: 'https://334.co.jp/', nearbyHotels: [
            { name: '라비스타 하코다테베이', link: 'https://maps.google.com/maps/search/%E3%83%A9%E3%83%93%E3%82%B9%E3%82%BF%E5%87%BD%E9%A4%A8%E3%83%99%E3%82%A4' },
            { name: '하코다테 코쿠사이 호텔', link: 'https://maps.google.com/maps/search/%E5%87%BD%E9%A4%A8%E5%9B%BD%E9%9A%9B%E3%83%9B%E3%83%86%E3%83%AB%20%ED%95%98%EC%BD%94%EB%8B%A4%ED%85%8C+北海道' }
        ] },
        { name: '고료카쿠 타워 & 공원', lat: 41.7970, lng: 140.7567, category: '하코다테', description: '별 모양의 요새와 아름다운 벚꽃으로 유명한 공원입니다.', hours: '08:00 - 19:00 (타워)', admission: '타워 성인 1,000엔', website: 'https://www.goryokaku-tower.co.jp/', nearbyHotels: [
            { name: '센추리 마리나 하코다테', link: 'https://maps.google.com/maps/search/センチュリーマリーナ函館+ホテル' },
            { name: '하코다테 그랜드 호텔', link: 'https://maps.google.com/maps/search/%E5%87%BD%E9%A4%A8%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%83%9B%E3%83%86%E3%83%AB%20%ED%95%98%EC%BD%94%EB%8B%A4%ED%85%8C+北海道' }
        ] },
        { name: '하치만자카', lat: 41.768, lng: 140.712, category: '하코다테', description: '항구를 향해 곧게 뻗은 언덕길로, 영화 촬영지로도 유명합니다.', hours: '24시간 개방', admission: '무료', website: 'https://www.hakodate.travel/ko/', nearbyHotels: [
            { name: '라비스타 하코다테베이', link: 'https://maps.google.com/maps/search/%E3%83%A9%E3%83%93%E3%82%B9%E3%82%BF%E5%87%BD%E9%A4%A8%E3%83%99%E3%82%A4' },
            { name: '하코다테 코쿠사이 호텔', link: 'https://maps.google.com/maps/search/%E5%87%BD%E9%A4%A8%E5%9B%BD%E9%9A%9B%E3%83%9B%E3%83%86%E3%83%AB%20%ED%95%98%EC%BD%94%EB%8B%A4%ED%85%8C+北海道' }
        ] },
        { name: '하코다테 아침시장', lat: 41.7737, lng: 140.7264, category: '하코다테', description: '신선한 바다 게와 성게 등 홋카이도의 최고급 해산물을 맛볼 수 있는 시장입니다.', hours: '05:00 - 14:00', admission: '무료', website: 'https://www.hakodate-asaichi.com/', nearbyHotels: [
            { name: 'JR INN 하코다테', link: 'https://maps.google.com/maps/search/JR%E3%82%A4%E3%83%B3%E5%87%BD%E9%A4%A8' },
            { name: '하코다테 리치몬드 호텔', link: 'https://maps.google.com/maps/search/%E3%83%AA%E3%83%83%E3%83%81%E3%83%A2%E3%83%B3%E3%83%89%E3%83%9B%E3%83%86%E3%83%AB%E5%87%BD%E9%A4%A8%20%ED%95%98%EC%BD%94%EB%8B%A4%ED%85%8C+北海道' }
        ] },
        { name: '모토마치 지구', lat: 41.7669, lng: 140.7063, category: '하코다테', description: '이국적인 서양식 건물들이 늘어선 역사적인 거리입니다.', hours: '24시간 개방', admission: '무료', website: 'https://www.hakodate.travel/', nearbyHotels: [
            { name: '라비스타 하코다테베이', link: 'https://maps.google.com/maps/search/%E3%83%A9%E3%83%93%E3%82%B9%E3%82%BF%E5%87%BD%E9%A4%A8%E3%83%99%E3%82%A4' },
            { name: '하코다테 그랜드 호텔', link: 'https://maps.google.com/maps/search/%E5%87%BD%E9%A4%A8%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%83%9B%E3%83%86%E3%83%AB%20%ED%95%98%EC%BD%94%EB%8B%A4%ED%85%8C+北海道' }
        ] },
        { name: '하코다테 빨간벽돌창고', lat: 41.7726, lng: 140.7144, category: '하코다테', description: '메이지 시대의 창고를 개조한 쇼핑몰로 기념품과 맛집이 가득합니다.', hours: '09:30 - 19:00', admission: '무료', website: 'https://hakodate-kanemori.com/', nearbyHotels: [
            { name: 'JR INN 하코다테', link: 'https://maps.google.com/maps/search/JR%E3%82%A4%E3%83%B3%E5%87%BD%E9%A4%A8' },
            { name: '하코다테 코쿠사이 호텔', link: 'https://maps.google.com/maps/search/%E5%87%BD%E9%A4%A8%E5%9B%BD%E9%9A%9B%E3%83%9B%E3%83%86%E3%83%AB%20%ED%95%98%EC%BD%94%EB%8B%A4%ED%85%8C+北海道' }
        ] },

        // 비에이 & 후라노
        { name: '청의 호수 (아오이이케)', lat: 43.4990, lng: 142.6098, category: '비에이/후라노', description: '신비로운 푸른 빛을 띠는 인공 호수입니다.', hours: '24시간 개방', admission: '무료', website: 'https://www.biei-hokkaido.jp/ja/sightseeing/shirogane-blue-pond/', nearbyHotels: [
            { name: '시로가네 온천 호텔', link: 'https://maps.google.com/maps/search/%E7%99%BD%E9%87%91%E6%B8%A9%E6%B3%89%E3%83%9B%E3%83%86%E3%83%AB+北海道' },
            { name: '비에이 포테토의 언덕', link: 'https://maps.google.com/maps/search/%E7%BE%8E%E7%91%9B%E3%83%9D%E3%83%86%E3%83%88%E3%81%AE%E4%B8%98' }
        ] },
        { name: '팜 도미타', lat: 43.4169, lng: 142.4218, category: '비에이/후라노', description: '라벤더를 비롯한 다채로운 꽃들이 언덕을 뒤덮는 농원입니다.', hours: '08:30 - 17:00 (계절별 변동)', admission: '무료', website: 'https://www.farm-tomita.co.jp/', nearbyHotels: [
            { name: '후라노 프린스 호텔', link: 'https://maps.google.com/maps/search/%E5%AF%8C%E8%89%AF%E9%87%8E%E3%83%97%E3%83%AA%E3%83%B3%E3%82%B9%E3%83%9B%E3%83%86%E3%83%AB%20%ED%9B%84%EB%9D%BC%EB%85%B8+北海道' },
            { name: '라벤더 힐즈 호텔', link: 'https://maps.google.com/maps/search/%E3%83%A9%E3%83%99%E3%83%B3%E3%83%80%E3%83%BC%E3%83%92%E3%83%AB%E3%82%BA%E3%83%9B%E3%83%86%E3%83%AB+北海道' }
        ] },
        { name: '사계채의 언덕', lat: 43.473, lng: 142.468, category: '비에이/후라노', description: '넓은 언덕에 형형색색의 꽃들이 심어져 있는 아름다운 곳입니다.', hours: '08:30 - 17:00 (계절별 변동)', admission: '성인 300엔', website: 'https://www.shikisainooka.jp/', nearbyHotels: [
            { name: '비에이 센추리 호텔', link: 'https://maps.google.com/maps/search/美瑛+センチュリーホテル' },
            { name: '펜션 라벤더', link: 'https://maps.google.com/maps/search/%E3%83%9A%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%A9%E3%83%99%E3%83%B3%E3%83%80%E3%83%BC' }
        ] },
        { name: '흰수염 폭포', lat: 43.492, lng: 142.648, category: '비에이/후라노', description: '절벽의 틈새에서 흘러나오는 물줄기가 흰수염처럼 보이는 폭포입니다.', hours: '24시간 개방', admission: '무료', website: 'https://www.biei-hokkaido.jp/', nearbyHotels: [
            { name: '시로가네 온천 호텔', link: 'https://maps.google.com/maps/search/%E7%99%BD%E9%87%91%E6%B8%A9%E6%B3%89%E3%83%9B%E3%83%86%E3%83%AB+北海道' },
            { name: '비에이 시라히게노타키 인', link: 'https://maps.google.com/maps/search/%E7%BE%8E%E7%91%9B%E7%99%BD%E3%83%92%E3%82%B2%E3%81%AE%E6%BB%9D%E3%82%A4%E3%83%B3' }
        ] },
        { name: '켄과 메리나무', lat: 43.496, lng: 142.523, category: '비에이/후라노', description: '1972년 닛산 자동차 광고에 등장해 유명해진 외로운 포플러 나무입니다.', hours: '24시간 개방', admission: '무료', website: 'https://www.biei-hokkaido.jp/', nearbyHotels: [
            { name: '비에이 센추리 호텔', link: 'https://maps.google.com/maps/search/美瑛+センチュリーホテル' },
            { name: '비에이 포테토의 언덕', link: 'https://maps.google.com/maps/search/%E7%BE%8E%E7%91%9B%E3%83%9D%E3%83%86%E3%83%88%E3%81%AE%E4%B8%98' }
        ] },
        { name: '플라워랜드 가미후라노', lat: 43.4483, lng: 142.4692, category: '비에이/후라노', description: '10헥타르의 광활한 꽃밭에서 계절별 다양한 꽃을 감상할 수 있습니다.', hours: '09:00 - 17:00', admission: '성인 500엔', website: 'https://www.flower-land.co.jp/', nearbyHotels: [
            { name: '가미후라노 하나비토 호텔', link: 'https://maps.google.com/maps/search/%E4%B8%8A%E5%AF%8C%E8%89%AF%E9%87%8E%E3%83%8F%E3%83%8A%E3%83%93%E3%83%88%E3%83%9B%E3%83%86%E3%83%AB%20%ED%9B%84%EB%9D%BC%EB%85%B8+北海道' },
            { name: '라벤더 힐즈 호텔', link: 'https://maps.google.com/maps/search/%E3%83%A9%E3%83%99%E3%83%B3%E3%83%80%E3%83%BC%E3%83%92%E3%83%AB%E3%82%BA%E3%83%9B%E3%83%86%E3%83%AB+北海道' }
        ] },
        { name: '후라노 치즈공방', lat: 43.3511, lng: 142.3744, category: '비에이/후라노', description: '신선한 홋카이도 우유로 만든 치즈를 직접 만들어보고 맛볼 수 있는 곳입니다.', hours: '09:00 - 17:00', admission: '무료 (체험 유료)', website: 'https://www.furano-cheese.jp/', nearbyHotels: [
            { name: '후라노 프린스 호텔', link: 'https://maps.google.com/maps/search/%E5%AF%8C%E8%89%AF%E9%87%8E%E3%83%97%E3%83%AA%E3%83%B3%E3%82%B9%E3%83%9B%E3%83%86%E3%83%AB%20%ED%9B%84%EB%9D%BC%EB%85%B8+北海道' },
            { name: '호시노 리조트 토마무', link: 'https://maps.google.com/maps/search/%E6%98%9F%E9%87%8E%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88%E3%83%88%E3%83%9E%E3%83%A0' }
        ] },
        
        // 도야 & 노보리베츠
        { name: '도야호', lat: 42.5789, lng: 140.8544, category: '도야/노보리베츠', description: '아름다운 칼데라 호수로, 유람선과 불꽃놀이가 유명합니다.', hours: '24시간 개방', admission: '무료 (유람선 유료)', website: 'https://www.laketoya.com/', nearbyHotels: [
            { name: '더 윈저 호텔 도야', link: 'https://maps.google.com/maps/search/%E3%82%B6%E3%83%BB%E3%82%A6%E3%82%A3%E3%83%B3%E3%82%B6%E3%83%BC%E3%83%9B%E3%83%86%E3%83%AB%E6%B4%9E%E7%88%BA%20%EB%8F%84%EC%95%BC+北海道' },
            { name: '도야 썬팰리스', link: 'https://maps.google.com/maps/search/洞爺+サンパレス+リゾート+ホテル' }
        ] },
        { name: '노보리베츠 지옥계곡', lat: 42.4981, lng: 141.1465, category: '도야/노보리베츠', description: '화산 가스와 온천수가 끓어오르는 모습이 지옥을 연상시키는 곳입니다.', hours: '24시간 개방', admission: '무료', website: 'https://noboribetsu-spa.jp/spot/jigokudani/', nearbyHotels: [
            { name: '노보리베츠 그랜드 호텔', link: 'https://maps.google.com/maps/search/%E7%99%BB%E5%88%A5%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%83%9B%E3%83%86%E3%83%AB%20%EB%85%B8%EB%B3%B4%EB%A6%AC%EB%B2%A0%EC%B8%A0+北海道' },
            { name: '타키모토 인', link: 'https://maps.google.com/maps/search/%E6%BB%9D%E6%9C%AC%E3%82%A4%E3%83%B3' }
        ] },
        { name: '오유누마', lat: 42.501, lng: 141.151, category: '도야/노보리베츠', description: '과거 화구였던 유황 냄새 가득한 온천 연못입니다.', hours: '24시간 개방', admission: '무료', website: 'https://noboribetsu-spa.jp/', nearbyHotels: [
            { name: '노보리베츠 만세이카쿠', link: 'https://maps.google.com/maps/search/%E7%99%BB%E5%88%A5%E4%B8%87%E4%B8%96%E9%96%A3' },
            { name: '호텔 마호로바', link: 'https://maps.google.com/maps/search/%E3%83%9B%E3%83%86%E3%83%AB%E3%81%BE%E3%81%BB%E3%82%8D%E3%81%B0+北海道' }
        ] },
        { name: '쇼와신잔', lat: 42.5533, lng: 140.8633, category: '도야/노보리베츠', description: '1943년 지진으로 생긴 새로운 화산으로, 지금도 연기를 내뿜고 있습니다.', hours: '24시간 개방', admission: '무료', website: 'https://www.laketoya.com/', nearbyHotels: [
            { name: '더 윈저 호텔 도야', link: 'https://maps.google.com/maps/search/%E3%82%B6%E3%83%BB%E3%82%A6%E3%82%A3%E3%83%B3%E3%82%B6%E3%83%BC%E3%83%9B%E3%83%86%E3%83%AB%E6%B4%9E%E7%88%BA%20%EB%8F%84%EC%95%BC+北海道' },
            { name: '도야 만세이카쿠 호텔', link: 'https://maps.google.com/maps/search/%E6%B4%9E%E7%88%BA%E4%B8%87%E4%B8%96%E9%96%A3%E3%83%9B%E3%83%86%E3%83%AB%20%EB%8F%84%EC%95%BC+北海道' }
        ] },
        { name: '우스산 로프웨이', lat: 42.5453, lng: 140.8517, category: '도야/노보리베츠', description: '활화산인 우스산의 분화구를 가까이에서 볼 수 있는 로프웨이입니다.', hours: '08:00 - 18:00', admission: '왕복 성인 1,800엔', website: 'https://usuzan.hokkaido.jp/', nearbyHotels: [
            { name: '도야 썬팰리스', link: 'https://maps.google.com/maps/search/洞爺+サンパレス+リゾート+ホテル' },
            { name: '우스산 온천 호텔', link: 'https://maps.google.com/maps/search/%E6%9C%89%E7%8F%A0%E5%B1%B1%E6%B8%A9%E6%B3%89%E3%83%9B%E3%83%86%E3%83%AB+北海道' }
        ] },
        { name: '노보리베츠 베어 파크', lat: 42.485, lng: 141.132, category: '도야/노보리베츠', description: '100여 마리의 불곰을 만날 수 있는 테마파크입니다.', hours: '09:00 - 17:00', admission: '성인 2,650엔', website: 'https://bearpark.jp/', nearbyHotels: [
            { name: '노보리베츠 그랜드 호텔', link: 'https://maps.google.com/maps/search/%E7%99%BB%E5%88%A5%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%83%9B%E3%83%86%E3%83%AB%20%EB%85%B8%EB%B3%B4%EB%A6%AC%EB%B2%A0%EC%B8%A0+北海道' },
            { name: '노보리베츠 프린스 호텔', link: 'https://maps.google.com/maps/search/登別+プリンスホテル+石水亭' }
        ] },

        // 아사히카와 & 북부
        { name: '아사히야마 동물원', lat: 43.7684, lng: 142.4805, category: '아사히카와/북부', description: "동물들의 행동을 생생하게 보여주는 '행동 전시'로 유명한 동물원입니다.", hours: '09:30 - 17:15 (계절별 변동)', admission: '성인 1,000엔', website: 'https://www.city.asahikawa.hokkaido.jp/asahiyamazoo/', nearbyHotels: [
            { name: 'JR INN 아사히카와', link: 'https://maps.google.com/maps/search/JR%E3%82%A4%E3%83%B3%E6%97%AD%E5%B7%9D' },
            { name: '아사히카와 그랜드 호텔', link: 'https://maps.google.com/maps/search/%E6%97%AD%E5%B7%9D%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%83%9B%E3%83%86%E3%83%AB%20%EC%95%84%EC%82%AC%ED%9E%88%EC%B9%B4%EC%99%80+北海道' }
        ] },
        { name: '소운쿄', lat: 43.726, lng: 142.95, category: '아사히카와/북부', description: '다이세츠산 국립공원에 위치한 협곡으로, 웅장한 폭포와 단풍이 절경입니다.', hours: '24시간 개방', admission: '무료', website: 'https://sounkyo.net/', nearbyHotels: [
            { name: '소운쿄 온천 호텔', link: 'https://maps.google.com/maps/search/%E5%B1%A4%E9%9B%B2%E5%B3%A1%E6%B8%A9%E6%B3%89%E3%83%9B%E3%83%86%E3%83%AB+北海道' },
            { name: '다이세츠 호텔', link: 'https://maps.google.com/maps/search/%E5%A4%A7%E9%9B%AA%E3%83%9B%E3%83%86%E3%83%AB+北海道' }
        ] },
        { name: '가미카와 대설 주조', lat: 43.7614, lng: 142.3647, category: '아사히카와/북부', description: '홋카이도의 청정한 눈으로 빚은 일본 사케를 시음할 수 있는 양조장입니다.', hours: '09:00 - 17:00', admission: '무료 (시음 유료)', website: 'https://www.taisetsu.co.jp/', nearbyHotels: [
            { name: '아사히카와 그랜드 호텔', link: 'https://maps.google.com/maps/search/%E6%97%AD%E5%B7%9D%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%83%9B%E3%83%86%E3%83%AB%20%EC%95%84%EC%82%AC%ED%9E%88%EC%B9%B4%EC%99%80+北海道' },
            { name: '아사히카와 팰리스 호텔', link: 'https://maps.google.com/maps/search/旭川+パレスホテル' }
        ] },
        { name: '아사히다케 로프웨이', lat: 43.6667, lng: 142.8500, category: '아사히카와/북부', description: '홋카이도 최고봉 아사히다케의 등반 기점이 되는 로프웨이입니다.', hours: '06:00 - 17:30', admission: '왕복 성인 3,200엔', website: 'https://asahidake.hokkaido.jp/', nearbyHotels: [
            { name: '아사히다케 온천 호텔', link: 'https://maps.google.com/maps/search/%E6%97%AD%E5%B2%B3%E6%B8%A9%E6%B3%89%E3%83%9B%E3%83%86%E3%83%AB+北海道' },
            { name: '소운쿄 온천 호텔', link: 'https://maps.google.com/maps/search/%E5%B1%A4%E9%9B%B2%E5%B3%A1%E6%B8%A9%E6%B3%89%E3%83%9B%E3%83%86%E3%83%AB+北海道' }
        ] },
        { name: '유카라노사토', lat: 43.7000, lng: 143.1000, category: '아사히카와/북부', description: '아이누 민족의 전통문화를 체험할 수 있는 문화시설입니다.', hours: '09:00 - 17:00', admission: '성인 770엔', website: 'https://www.yukaranosato.com/', nearbyHotels: [
            { name: '온네토 온천 호텔', link: 'https://maps.google.com/maps/search/%E3%82%AA%E3%83%B3%E3%83%8D%E3%83%88%E3%83%BC%E6%B8%A9%E6%B3%89%E3%83%9B%E3%83%86%E3%83%AB+北海道' },
            { name: '도쿠시베츠 유스호스텔', link: 'https://maps.google.com/maps/search/%E5%BE%B3%E5%BF%97%E5%88%A5%E3%83%A6%E3%83%BC%E3%82%B9%E3%83%9B%E3%82%B9%E3%83%86%E3%83%AB' }
        ] },

        // 동부
        { name: '시레토코 국립공원', lat: 44.0689, lng: 145.0108, category: '동부', description: '유네스코 세계자연유산으로, 원시 자연과 야생동물의 보고입니다.', hours: '24시간 개방', admission: '무료', website: 'https://shiretoko.or.jp/', nearbyHotels: [
            { name: '시레토코 그랜드 호텔', link: 'https://maps.google.com/maps/search/%E7%9F%A5%E5%BA%8A%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%83%9B%E3%83%86%E3%83%AB%20%EC%8B%9C%EB%A0%88%ED%86%A0%EC%BD%94+北海道' },
            { name: '북해호텔', link: 'https://maps.google.com/maps/search/北海ホテル+知床+ウトロ+斜里町' }
        ] },
        { name: '마슈호', lat: 43.5833, lng: 144.5167, category: '동부', description: '세계 최고 수준의 투명도를 자랑하는 신비로운 호수입니다.', hours: '24시간 개방', admission: '무료', website: 'https://www.masyuko.or.jp/', nearbyHotels: [
            { name: '가와유 온천 호텔', link: 'https://maps.google.com/maps/search/%E5%B7%9D%E6%B9%AF%E6%B8%A9%E6%B3%89%E3%83%9B%E3%83%86%E3%83%AB+北海道' },
            { name: '마슈 프린스 호텔', link: 'https://maps.google.com/maps/search/摩周+プリンスホテル+弟子屈' }
        ] },
        { name: '아칸호', lat: 43.4517, lng: 144.0986, category: '동부', description: "특별 천연기념물 '마리모'가 서식하는 것으로 유명한 호수입니다.", hours: '24시간 개방', admission: '무료', website: 'https://www.lake-akan.com/', nearbyHotels: [
            { name: '아칸 유쿠노사토 츠루라', link: 'https://maps.google.com/maps/search/%E9%98%BF%E5%AF%92%E3%81%82%E3%81%8B%E3%82%93%E9%81%8A%E4%B9%85%E3%81%AE%E9%87%8C%E3%81%A4%E3%82%8B%E3%82%89' },
            { name: '아칸 그랜드 호텔', link: 'https://maps.google.com/maps/search/阿寒+グランドホテル' }
        ] },
        { name: '구시로 습원', lat: 43.1056, lng: 144.2678, category: '동부', description: '일본 최대의 습원으로, 탄초학과 다양한 야생동물의 서식지입니다.', hours: '24시간 개방', admission: '무료', website: 'https://www.kushiro-shitsugen-np.jp/', nearbyHotels: [
            { name: '구시로 프린스 호텔', link: 'https://maps.google.com/maps/search/釧路+プリンスホテル' },
            { name: '구시로 로얄 인', link: 'https://maps.google.com/maps/search/%E9%87%A7%E8%B7%AF%E3%83%AD%E3%82%A4%E3%83%A4%E3%83%AB%E3%82%A4%E3%83%B3' }
        ] },
        { name: '오란코바위', lat: 44.0833, lng: 145.1167, category: '동부', description: '시레토코 반도의 상징적인 바위로, 우토로 해안의 절경을 만들어냅니다.', hours: '24시간 개방', admission: '무료', website: 'https://shiretoko.or.jp/', nearbyHotels: [
            { name: '시레토코 그랜드 호텔', link: 'https://maps.google.com/maps/search/%E7%9F%A5%E5%BA%8A%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%83%9B%E3%83%86%E3%83%AB%20%EC%8B%9C%EB%A0%88%ED%86%A0%EC%BD%94+北海道' },
            { name: '우토로 온천 호텔', link: 'https://maps.google.com/maps/search/%E3%82%A6%E3%83%88%E3%83%AD%E6%B8%A9%E6%B3%89%E3%83%9B%E3%83%86%E3%83%AB+北海道' }
        ] },
        { name: '노시크 곶', lat: 44.2167, lng: 145.2333, category: '동부', description: '홋카이도 최동북단의 곶으로, 시레토코의 원시 자연을 만끽할 수 있습니다.', hours: '24시간 개방', admission: '무료', website: 'https://shiretoko.or.jp/', nearbyHotels: [
            { name: '라우스 시사이드 호텔', link: 'https://maps.google.com/maps/search/%E7%BE%85%E8%87%BC%E3%82%B7%E3%83%BC%E3%82%B5%E3%82%A4%E3%83%89%E3%83%9B%E3%83%86%E3%83%AB+北海道' },
            { name: '시레토코 노사프 로지', link: 'https://maps.google.com/maps/search/%E7%9F%A5%E5%BA%8A%E3%83%8E%E3%82%B5%E3%83%83%E3%83%97%E3%83%AD%E3%83%83%E3%82%B8' }
        ] },
        { name: '가라후토 마스 과학관', lat: 44.0167, lng: 145.1167, category: '동부', description: '연어의 생태와 시레토코의 자연환경을 배울 수 있는 과학관입니다.', hours: '08:30 - 17:00', admission: '성인 300엔', website: 'https://shiretoko.or.jp/', nearbyHotels: [
            { name: '시레토코 그랜드 호텔', link: 'https://maps.google.com/maps/search/%E7%9F%A5%E5%BA%8A%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%83%9B%E3%83%86%E3%83%AB%20%EC%8B%9C%EB%A0%88%ED%86%A0%EC%BD%94+北海道' },
            { name: '북해호텔', link: 'https://maps.google.com/maps/search/北海ホテル+知床+ウトロ+斜里町' }
        ] },
        { name: '세쓰리 온천', lat: 43.5167, lng: 144.4833, category: '동부', description: '마슈호 근처의 자연 온천으로, 야외 노천탕에서 별을 감상할 수 있습니다.', hours: '24시간 개방', admission: '무료', website: 'https://www.masyuko.or.jp/', nearbyHotels: [
            { name: '가와유 온천 호텔', link: 'https://maps.google.com/maps/search/%E5%B7%9D%E6%B9%AF%E6%B8%A9%E6%B3%89%E3%83%9B%E3%83%86%E3%83%AB+北海道' },
            { name: '데시카가 온천 호텔', link: 'https://maps.google.com/maps/search/%E5%BC%9F%E5%AD%90%E5%B1%88%E6%B8%A9%E6%B3%89%E3%83%9B%E3%83%86%E3%83%AB+北海道' }
        ] }
    ];

      

    const infoPanel = document.getElementById('info-panel');
    const welcomeMessage = document.querySelector('.welcome-message');
    const infoContent = document.getElementById('info-content');
    const searchInput = document.getElementById('search-input');
    
    const filterButtons = document.querySelectorAll('.filter-btn');

    let markers = [];
    let activeFilterButton = document.querySelector('.filter-btn.active');
    let selectedMarker = null; // 현재 선택된 마커를 추적

    // 마커 아이콘 정의
    const defaultIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const selectedIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [30, 49], // 선택된 마커는 약간 더 크게
        iconAnchor: [15, 49],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const markerClusters = L.markerClusterGroup(); // 마커 클러스터 그룹 생성

    // 각 지역의 중심 좌표 정의
    const regionCenters = {
        '전체': { lat: 43.5, lng: 142.8, zoom: 7 },
        '삿포로': { lat: 43.0642, lng: 141.347, zoom: 10 },
        '오타루': { lat: 43.1907, lng: 141.0027, zoom: 12 },
        '하코다테': { lat: 41.7687, lng: 140.7287, zoom: 11 },
        '비에이/후라노': { lat: 43.457, lng: 142.515, zoom: 10 },
        '도야/노보리베츠': { lat: 42.539, lng: 140.999, zoom: 10 },
        '아사히카와/북부': { lat: 43.747, lng: 142.715, zoom: 9 },
        '동부': { lat: 43.693, lng: 144.603, zoom: 8 }
    };

    // Function to show single location details
    function showSingleLocationDetails(location) {
        welcomeMessage.classList.add('hidden');
        infoContent.classList.remove('hidden');
        
        // 근처 숙소 HTML 생성
        let hotelsHTML = '';
        if (location.nearbyHotels && location.nearbyHotels.length > 0) {
            hotelsHTML = `
                <div class="nearby-hotels">
                    <p class="info-detail"><strong>🏨 근처 추천 숙소:</strong></p>
                    <div class="hotel-list">
                        ${location.nearbyHotels.map(hotel => 
                            `<a href="${hotel.link}" target="_blank" class="hotel-link">${hotel.name}</a>`
                        ).join('')}
                    </div>
                </div>
            `;
        }
        
        // 상세 정보 HTML을 동적으로 생성
        infoContent.innerHTML = `
            <h2 id="info-title">${location.name}</h2>
            <p id="info-description">${location.description}</p>
            ${location.hours ? `<p class="info-detail"><strong>운영 시간:</strong> ${location.hours}</p>` : ''}
            ${location.admission ? `<p class="info-detail"><strong>입장료:</strong> ${location.admission}</p>` : ''}
            ${location.website ? `<p class="info-detail"><strong>웹사이트:</strong> <a href="${location.website}" target="_blank">${location.website}</a></p>` : ''}
            ${location.lat && location.lng ? `<p class="info-detail"><strong>경로 안내:</strong> <a href="https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}" target="_blank">Google 지도로 이동</a></p>` : ''}
            ${hotelsHTML}
        `;
        
        infoPanel.classList.add('visible');
    }

    // 마커 선택 함수
    function selectMarker(marker, location) {
        // 이전에 선택된 마커가 있다면 기본 아이콘으로 복원
        if (selectedMarker && selectedMarker !== marker) {
            selectedMarker.setIcon(defaultIcon);
        }
        
        // 새 마커를 선택 상태로 변경
        marker.setIcon(selectedIcon);
        selectedMarker = marker;
        
        // 지도를 해당 마커 중심으로 이동 (부드러운 애니메이션과 함께)
        map.flyTo([location.lat, location.lng], 12, {
            animate: true,
            duration: 1.0 // 1초 동안 애니메이션
        });
        
        // 상세 정보 표시
        showSingleLocationDetails(location);
    }

    // Function to display a list of locations (for cluster click)
    function displayClusterLocations(locationsInCluster) {
        welcomeMessage.classList.add('hidden');
        infoContent.classList.remove('hidden');

        // 클러스터 리스트 HTML을 동적으로 생성
        let clusterHTML = '<h2 id="info-title">클러스터 내 명소</h2>';
        
        locationsInCluster.forEach((location, index) => {
            clusterHTML += `
                <div class="cluster-location-card" data-location-index="${index}">
                    <h3>${location.name}</h3>
                    <p>${location.description.substring(0, 100)}...</p>
                </div>
            `;
        });
        
        infoContent.innerHTML = clusterHTML;
        
        // 각 카드에 클릭 이벤트 리스너 추가
        locationsInCluster.forEach((location, index) => {
            const cardElement = infoContent.querySelector(`[data-location-index="${index}"]`);
            cardElement.addEventListener('click', () => {
                // 해당 위치의 마커를 찾아서 선택
                const targetMarker = markers.find(marker => 
                    marker.locationData && 
                    marker.locationData.lat === location.lat && 
                    marker.locationData.lng === location.lng
                );
                
                if (targetMarker) {
                    selectMarker(targetMarker, location);
                } else {
                    // 마커를 찾지 못한 경우 기본 동작
                    showSingleLocationDetails(location);
                    map.flyTo([location.lat, location.lng], 12, {
                        animate: true,
                        duration: 1.0
                    });
                }
            });
        });
        
        infoPanel.classList.add('visible');
    }

    // Function to display filtered locations list in right panel
    function displayFilteredLocationsList(filter = '전체', searchTerm = '') {
        let filteredLocations = locations;

        // 필터링
        if (filter !== '전체') {
            filteredLocations = filteredLocations.filter(loc => loc.category === filter);
        }

        // 검색
        if (searchTerm) {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            filteredLocations = filteredLocations.filter(loc => 
                loc.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                loc.description.toLowerCase().includes(lowerCaseSearchTerm)
            );
        }

        welcomeMessage.classList.add('hidden');
        infoContent.classList.remove('hidden');

        // 지역별 리스트 HTML 생성
        const regionName = filter === '전체' ? '모든 지역' : filter;
        let listHTML = `<h2 id="info-title">${regionName} 명소 (${filteredLocations.length}개)</h2>`;
        
        if (filteredLocations.length === 0) {
            listHTML += '<p style="color: #64748b; text-align: center; margin: 20px 0;">검색 결과가 없습니다.</p>';
        } else {
            filteredLocations.forEach((location, index) => {
                listHTML += `
                    <div class="location-list-card" data-location-index="${index}">
                        <h3>${location.name}</h3>
                        <p>${location.description.substring(0, 80)}...</p>
                        <div class="card-footer">
                            <span class="category-tag">${location.category}</span>
                            <span class="hours-text">${location.hours}</span>
                        </div>
                    </div>
                `;
            });
        }
        
        infoContent.innerHTML = listHTML;
        
        // 각 카드에 클릭 이벤트 리스너 추가
        filteredLocations.forEach((location, index) => {
            const cardElement = infoContent.querySelector(`[data-location-index="${index}"]`);
            if (cardElement) {
                cardElement.addEventListener('click', () => {
                    // 해당 위치의 마커를 찾아서 선택
                    const targetMarker = markers.find(marker => 
                        marker.locationData && 
                        marker.locationData.lat === location.lat && 
                        marker.locationData.lng === location.lng
                    );
                    
                    if (targetMarker) {
                        selectMarker(targetMarker, location);
                        map.flyTo([location.lat, location.lng], 14, {
                            animate: true,
                            duration: 1.0
                        });
                    }
                });
                
                // 호버 효과 추가
                cardElement.addEventListener('mouseenter', () => {
                    cardElement.style.transform = 'translateY(-2px)';
                    cardElement.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.15)';
                    cardElement.style.borderColor = '#3b82f6';
                });
                
                cardElement.addEventListener('mouseleave', () => {
                    cardElement.style.transform = 'translateY(0)';
                    cardElement.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                    cardElement.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                });
            }
        });
        
        infoPanel.classList.add('visible');
    }

    function displayMarkers(filter = '전체', searchTerm = '') {
        markerClusters.clearLayers(); // 기존 마커 클러스터 그룹에서 모든 마커 제거
        markers = []; // 개별 마커 배열 초기화
        selectedMarker = null; // 선택된 마커 초기화

        let filteredLocations = locations;

        // 필터링
        if (filter !== '전체') {
            filteredLocations = filteredLocations.filter(loc => loc.category === filter);
        }

        // 검색
        if (searchTerm) {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            filteredLocations = filteredLocations.filter(loc => 
                loc.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                loc.description.toLowerCase().includes(lowerCaseSearchTerm)
            );
        }

        filteredLocations.forEach(location => {
            const marker = L.marker([location.lat, location.lng], { icon: defaultIcon });
            
            // 마커에 위치 정보 저장
            marker.locationData = location;
            
            marker.on('click', () => {
                selectMarker(marker, location);
            });
            markers.push(marker);
            markerClusters.addLayer(marker); // 마커를 클러스터 그룹에 추가
        });
        map.addLayer(markerClusters); // 클러스터 그룹을 지도에 추가
    }

    markerClusters.on('clusterclick', function (a) {
        const markersInCluster = a.layer.getAllChildMarkers();
        const locationsInCluster = markersInCluster.map(marker => {
            // Find the corresponding location object from the original locations array
            return locations.find(loc => loc.lat === marker.getLatLng().lat && loc.lng === marker.getLatLng().lng);
        });
        displayClusterLocations(locationsInCluster);
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            if (activeFilterButton) {
                activeFilterButton.classList.remove('active');
            }
            button.classList.add('active');
            activeFilterButton = button;

            // 해당 지역 중심으로 지도 이동
            if (regionCenters[filter]) {
                const center = regionCenters[filter];
                map.flyTo([center.lat, center.lng], center.zoom, {
                    animate: true,
                    duration: 1.2 // 지역 이동은 조금 더 긴 애니메이션
                });
            }

            // 선택된 마커 초기화 (새 지역으로 이동할 때)
            if (selectedMarker) {
                selectedMarker.setIcon(defaultIcon);
                selectedMarker = null;
            }

            // 필터 버튼 클릭 시 검색어는 유지
            displayMarkers(filter, searchInput.value);
            
            // 해당 지역의 명소 리스트를 우측 패널에 표시
            displayFilteredLocationsList(filter, searchInput.value);
        });
    });

    searchInput.addEventListener('input', () => {
        // 검색어 입력 시 현재 활성화된 필터 유지
        const currentFilter = activeFilterButton ? activeFilterButton.dataset.filter : '전체';
        displayMarkers(currentFilter, searchInput.value);
        displayFilteredLocationsList(currentFilter, searchInput.value);
    });

    // 지도를 기본 위치로 되돌리는 함수
    function resetMapView() {
        // 선택된 마커 초기화
        if (selectedMarker) {
            selectedMarker.setIcon(defaultIcon);
            selectedMarker = null;
        }
        
        // 지도를 홋카이도 전체 뷰로 되돌리기
        map.flyTo([43.5, 142.8], 7, {
            animate: true,
            duration: 1.0
        });
        
        // 환영 메시지 표시
        welcomeMessage.classList.remove('hidden');
        infoContent.classList.add('hidden');
        infoPanel.classList.add('visible');
    }

    // 환영 메시지 영역 클릭 시 지도 리셋 (선택사항)
    welcomeMessage.addEventListener('click', resetMapView);

    // 다크모드 기본 설정
    document.documentElement.setAttribute('data-theme', 'dark');

    // 초기 로드
    displayMarkers();
    infoPanel.classList.add('visible');
});
