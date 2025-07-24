
document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([43.5, 142.8], 7);
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    const locations = [
        // 삿포로 & 근교
        { name: '오도리 공원', lat: 43.0603, lng: 141.3516, category: '삿포로', description: '삿포로 중심부의 공원으로 사계절 내내 다양한 축제가 열립니다.', hours: '24시간 개방', admission: '무료', website: 'https://www.sapporo.travel/spot/facility/odori_park/' },
        { name: '삿포로 TV 타워', lat: 43.061, lng: 141.356, category: '삿포로', description: '오도리 공원 동쪽 끝에 위치한 삿포로의 랜드마크입니다.', hours: '09:00 - 22:00', admission: '성인 1,000엔', website: 'https://www.tv-tower.co.jp/' },
        { name: '스스키노', lat: 43.055, lng: 141.354, category: '삿포로', description: '홋카이도 최대의 번화가로, 수많은 맛집과 상점이 밀집해 있습니다.' },
        { name: '시로이코이비토 파크', lat: 43.0865, lng: 141.2739, category: '삿포로', description: "유명 과자 '시로이 코이비토'의 테마파크로, 유럽풍 건물이 인상적입니다.", hours: '10:00 - 17:00', admission: '무료 (일부 유료)', website: 'https://www.shiroikoibitopark.jp/' },
        { name: '삿포로 맥주 박물관', lat: 43.0712, lng: 141.3682, category: '삿포로', description: '삿포로 맥주의 역사와 제조 과정을 배우고 시음도 할 수 있습니다.', hours: '11:00 - 17:00', admission: '무료 (시음 유료)', website: 'https://www.sapporobeer.jp/brewery/s_museum/' },
        { name: '모에레누마 공원', lat: 43.1233, lng: 141.4278, category: '삿포로', description: '조각가 이사무 노구치가 설계한 예술적인 공원입니다.', hours: '07:00 - 22:00', admission: '무료', website: 'https://moerenumapark.jp/' },

        // 오타루
        { name: '오타루 운하', lat: 43.1981, lng: 141.0031, category: '오타루', description: '가스등이 켜진 낭만적인 분위기의 운하입니다.', hours: '24시간 개방', admission: '무료', website: 'https://otaru.gr.jp/tourist/otaru-canal' },
        { name: '오타루 오르골당', lat: 43.192, lng: 141.007, category: '오타루', description: '다양하고 아름다운 오르골을 만날 수 있는 곳입니다.', hours: '09:00 - 18:00', admission: '무료', website: 'https://www.otaru-orgel.co.jp/' },
        
        // 하코다테
        { name: '하코다테산 전망대', lat: 41.7651, lng: 140.7065, category: '하코다테', description: '세계 3대 야경으로 꼽히는 하코다테의 야경을 감상할 수 있습니다.', hours: '10:00 - 22:00 (계절별 변동)', admission: '왕복 케이블카 성인 1,500엔', website: 'https://334.co.jp/' },
        { name: '고료카쿠 타워 & 공원', lat: 41.7970, lng: 140.7567, category: '하코다테', description: '별 모양의 요새와 아름다운 벚꽃으로 유명한 공원입니다.', hours: '08:00 - 19:00 (타워)', admission: '타워 성인 1,000엔', website: 'https://www.goryokaku-tower.co.jp/' },
        { name: '하치만자카', lat: 41.768, lng: 140.712, category: '하코다테', description: '항구를 향해 곧게 뻗은 언덕길로, 영화 촬영지로도 유명합니다.' },

        // 비에이 & 후라노
        { name: '청의 호수 (아오이이케)', lat: 43.4990, lng: 142.6098, category: '비에이/후라노', description: '신비로운 푸른 빛을 띠는 인공 호수입니다.', hours: '24시간 개방', admission: '무료', website: 'https://www.biei-hokkaido.jp/ja/sightseeing/shirogane-blue-pond/' },
        { name: '팜 도미타', lat: 43.4169, lng: 142.4218, category: '비에이/후라노', description: '라벤더를 비롯한 다채로운 꽃들이 언덕을 뒤덮는 농원입니다.', hours: '08:30 - 17:00 (계절별 변동)', admission: '무료', website: 'https://www.farm-tomita.co.jp/' },
        { name: '사계채의 언덕', lat: 43.473, lng: 142.468, category: '비에이/후라노', description: '넓은 언덕에 형형색색의 꽃들이 심어져 있는 아름다운 곳입니다.' },
        { name: '흰수염 폭포', lat: 43.492, lng: 142.648, category: '비에이/후라노', description: '절벽의 틈새에서 흘러나오는 물줄기가 흰수염처럼 보이는 폭포입니다.' },
        
        // 도야 & 노보리베츠
        { name: '도야호', lat: 42.5789, lng: 140.8544, category: '도야/노보리베츠', description: '아름다운 칼데라 호수로, 유람선과 불꽃놀이가 유명합니다.', hours: '24시간 개방', admission: '무료 (유람선 유료)', website: 'https://www.laketoya.com/' },
        { name: '노보리베츠 지옥계곡', lat: 42.4981, lng: 141.1465, category: '도야/노보리베츠', description: '화산 가스와 온천수가 끓어오르는 모습이 지옥을 연상시키는 곳입니다.', hours: '24시간 개방', admission: '무료', website: 'https://noboribetsu-spa.jp/spot/jigokudani/' },
        { name: '오유누마', lat: 42.501, lng: 141.151, category: '도야/노보리베츠', description: '과거 화구였던 유황 냄새 가득한 온천 연못입니다.' },

        // 아사히카와 & 북부
        { name: '아사히야마 동물원', lat: 43.7684, lng: 142.4805, category: '아사히카와/북부', description: "동물들의 행동을 생생하게 보여주는 '행동 전시'로 유명한 동물원입니다.", hours: '09:30 - 17:15 (계절별 변동)', admission: '성인 1,000엔', website: 'https://www.city.asahikawa.hokkaido.jp/asahiyamazoo/' },
        { name: '소운쿄', lat: 43.726, lng: 142.95, category: '아사히카와/북부', description: '다이세츠산 국립공원에 위치한 협곡으로, 웅장한 폭포와 단풍이 절경입니다.' },

        // 동부
        { name: '시레토코 국립공원', lat: 44.0689, lng: 145.0108, category: '동부', description: '유네스코 세계자연유산으로, 원시 자연과 야생동물의 보고입니다.', hours: '24시간 개방', admission: '무료', website: 'https://shiretoko.or.jp/' },
        { name: '마슈호', lat: 43.5833, lng: 144.5167, category: '동부', description: '세계 최고 수준의 투명도를 자랑하는 신비로운 호수입니다.' },
        { name: '아칸호', lat: 43.4517, lng: 144.0986, category: '동부', description: "특별 천연기념물 '마리모'가 서식하는 것으로 유명한 호수입니다." }
    ];

      

    const infoPanel = document.getElementById('info-panel');
    const welcomeMessage = document.querySelector('.welcome-message');
    const infoContent = document.getElementById('info-content');
    const infoTitle = document.getElementById('info-title');
    const infoDescription = document.getElementById('info-description');

    const infoHours = document.getElementById('info-hours');
    const infoAdmission = document.getElementById('info-admission');
    const infoWebsite = document.getElementById('info-website');
    const infoRouteLink = document.getElementById('info-route-link'); // Added this line

    const searchInput = document.getElementById('search-input');
    
    const filterButtons = document.querySelectorAll('.filter-btn');

    let markers = [];
    let activeFilterButton = document.querySelector('.filter-btn.active');

    const markerClusters = L.markerClusterGroup(); // 마커 클러스터 그룹 생성

    // Function to hide single location details and show welcome/cluster list
    function hideSingleLocationDetails() {
        infoTitle.textContent = '';
        infoDescription.textContent = '';
        infoHours.textContent = '';
        infoAdmission.textContent = '';
        infoWebsite.innerHTML = '';
        infoRouteLink.innerHTML = '';

        infoHours.style.display = 'none';
        infoAdmission.style.display = 'none';
        infoWebsite.style.display = 'none';
        infoRouteLink.style.display = 'none';
    }

    // Function to show single location details
    function showSingleLocationDetails(location) {
        hideSingleLocationDetails(); // Clear previous content

        welcomeMessage.classList.add('hidden');
        infoContent.classList.remove('hidden');
        
        infoTitle.textContent = location.name;
        infoDescription.textContent = location.description;

        infoHours.textContent = location.hours ? `운영 시간: ${location.hours}` : '';
        infoAdmission.textContent = location.admission ? `입장료: ${location.admission}` : '';
        infoWebsite.innerHTML = location.website ? `웹사이트: <a href="${location.website}" target="_blank">${location.website}</a>` : '';

        if (location.lat && location.lng) {
            const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
            infoRouteLink.innerHTML = `경로 안내: <a href="${googleMapsUrl}" target="_blank">Google 지도로 이동</a>`;
            infoRouteLink.style.display = 'block';
        } else {
            infoRouteLink.style.display = 'none';
        }

        infoHours.style.display = location.hours ? 'block' : 'none';
        infoAdmission.style.display = location.admission ? 'block' : 'none';
        infoWebsite.style.display = location.website ? 'block' : 'none';
        infoRouteLink.style.display = (location.lat && location.lng) ? 'block' : 'none';
        
        infoPanel.classList.add('visible');
    }

    // Function to display a list of locations (for cluster click)
    function displayClusterLocations(locationsInCluster) {
        hideSingleLocationDetails(); // Hide single location details

        welcomeMessage.classList.add('hidden');
        infoContent.classList.remove('hidden');

        // Clear info-content for new list
        infoContent.innerHTML = '<h2 id="info-title">클러스터 내 명소</h2>'; // Keep the title element

        locationsInCluster.forEach(location => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('cluster-location-card');
            cardDiv.innerHTML = `
                <h3>${location.name}</h3>
                <p>${location.description.substring(0, 100)}...</p> <!-- Truncate description -->
            `;
            // Add click listener to each card to show full details
            cardDiv.addEventListener('click', () => {
                showSingleLocationDetails(location);
                // Optionally, zoom to the clicked marker
                map.setView([location.lat, location.lng], 15);
            });
            infoContent.appendChild(cardDiv);
        });
        infoPanel.classList.add('visible');
    }

    function displayMarkers(filter = '전체', searchTerm = '') {
        markerClusters.clearLayers(); // 기존 마커 클러스터 그룹에서 모든 마커 제거
        markers = []; // 개별 마커 배열 초기화

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
            const marker = L.marker([location.lat, location.lng]);
            marker.on('click', () => {
                showSingleLocationDetails(location);
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

            // 필터 버튼 클릭 시 검색어는 유지
            displayMarkers(filter, searchInput.value);
        });
    });

    searchInput.addEventListener('input', () => {
        // 검색어 입력 시 현재 활성화된 필터 유지
        const currentFilter = activeFilterButton ? activeFilterButton.dataset.filter : '전체';
        displayMarkers(currentFilter, searchInput.value);
    });

    // 초기 로드
    displayMarkers();
    infoPanel.classList.add('visible');
});
