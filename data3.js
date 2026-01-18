// Şube Müdürlüğü Sınav Hazırlık - Sınav 3 Veri Dosyası
// İLERİ SEVİYE - Gerçek sınav seviyesinde ZOR soru bankası
// Tuzak şıklar, karmaşık senaryolar ve detaylı mevzuat bilgisi gerektiren sorular

const exam3Topics = [
    {
        id: 1,
        name: "Türkçe Dil Bilgisi",
        questionCount: 5,
        icon: "📖",
        flashcards: [],
        questions: [
            { q: "'Akşam saatlerinde hava karardığında eve dönmeye karar verdim.' cümlesinde kaç tane yan cümlecik vardır?", options: ["Yan cümle yoktur, basit cümledir.", "1 yan cümlecik", "2 yan cümlecik", "3 yan cümlecik", "4 yan cümlecik"], answer: 2 },
            { q: "Aşağıdaki cümlelerin hangisinde hem özne hem de nesne ortak olarak eksik bırakılarak anlatım bozukluğu yapılmıştır?", options: ["Kitabı aldım, okudum ve beğendim.", "Çalışanlar toplantıya katıldı, önerileri sundu.", "Bu soruyu herkes çözebilir ama ben çözemedim.", "Hava bulutluydu ancak yağmur yağmadı.", "Hem anladım hem uyguladım bu konuyu."], answer: 1 },
            { q: "'Yarın akşama kadar bu işi bitirmiş olacağım.' cümlesindeki fiil, aşağıdaki zaman ve kip kombinasyonlarından hangisine uygundur?", options: ["Gelecek zaman (basit)", "Belirsiz geçmiş zamanın rivayeti", "Gelecek zamanın hikâyesi", "Gelecek zamanda tamamlanmış (önceden olacak)", "Şimdiki zamanın hikâyesi"], answer: 3 },
            { q: "Aşağıdaki cümlelerin hangisinde 'ki' bağlacı doğru kullanılmıştır?", options: ["Öyle bir gün geçirdik ki anlatamam.", "Dün ki toplantıda bu konuşuldu.", "Evdeki hesap çarşıya uymaz derler.", "Yarınki sınav çok zor olacak.", "Bugünki hava çok güzel."], answer: 0 },
            { q: "'Okumayı seven çocuklar, kültürel birikimlerini artırarak geleceğe daha hazırlıklı bireyler olarak yetişirler.' cümlesindeki fiilimsilerin (ortaç, ulaç, mastar) toplam sayısı kaçtır?", options: ["2", "3", "4", "5", "6"], answer: 2 }
        ]
    },
    {
        id: 2,
        name: "Yönetimde İnsan İlişkileri ve İletişim",
        questionCount: 2,
        icon: "🤝",
        flashcards: [],
        questions: [
            { q: "Örgütsel davranış alanında 'örgütsel adalet' kavramı üç boyutuyla ele alınır. Bu boyutlar sırasıyla hangi seçenekte doğru verilmiştir?", options: ["Dağıtımsal adalet, prosedürel adalet, etkileşimsel adalet", "Bireysel adalet, kurumsal adalet, toplumsal adalet", "Ekonomik adalet, sosyal adalet, hukuki adalet", "İç adalet, dış adalet, karşılaştırmalı adalet", "Formal adalet, informal adalet, yapısal adalet"], answer: 0 },
            { q: "Victor Vroom'un Beklenti Teorisine göre, bireyin performansının ödülle sonuçlanacağına ilişkin algısını ifade eden kavram aşağıdakilerden hangisidir?", options: ["Valens (Değer)", "Beklenti (Expectancy)", "Araçsallık (Instrumentality)", "Motivasyon katsayısı", "Performans algısı"], answer: 2 }
        ]
    },
    {
        id: 3,
        name: "Yönetim, Liderlik ve Organizasyon",
        questionCount: 3,
        icon: "👔",
        flashcards: [],
        questions: [
            { q: "Henry Mintzberg'in örgüt yapılandırma modeline göre, profesyonel bürokrasilerde koordinasyonun sağlanmasında en önemli mekanizma aşağıdakilerden hangisidir?", options: ["Doğrudan gözetim", "Karşılıklı uyum", "İş süreçlerinin standartlaştırılması", "Çıktıların standartlaştırılması", "Becerilerin standartlaştırılması"], answer: 4 },
            { q: "Blake ve Mouton'un Yönetim Tarzı Matrisi'nde (Yönetim Izgara Modeli) 'üretime yönelik ilgi' ve 'insana yönelik ilgi' boyutlarının her ikisinin de yüksek olduğu (9,9) liderlik tarzı aşağıdakilerden hangisidir?", options: ["Otorite-İtaat Yönetimi", "Şehir Kulübü Yönetimi", "Orta Yol Yönetimi", "Takım Yönetimi", "Cılız Yönetim"], answer: 3 },
            { q: "Örgütsel değişim sürecinde Kurt Lewin'in 'Alan Kuramı'na göre değişimin gerçekleşebilmesi için önce mevcut dengenin bozulması gerekmektedir. Bu aşama aşağıdakilerden hangisidir?", options: ["Değiştirme (Changing)", "Yeniden dondurma (Refreezing)", "Çözme/Buzları eritme (Unfreezing)", "Analiz (Analysis)", "Planlama (Planning)"], answer: 2 }
        ]
    },
    {
        id: 4,
        name: "İnsan Hakları ve Demokrasi",
        questionCount: 1,
        icon: "⚖️",
        flashcards: [],
        questions: [
            { q: "Avrupa İnsan Hakları Sözleşmesi'ne Türkiye tarafından çekince konulan tek madde aşağıdakilerden hangisidir?", options: ["Madde 2 - Yaşam hakkı", "Madde 3 - İşkence yasağı", "Madde 6 - Adil yargılanma hakkı", "Madde 8 - Özel hayata saygı hakkı", "1 No'lu Protokol Madde 2 - Eğitim hakkı"], answer: 4 }
        ]
    },
    {
        id: 5,
        name: "Yönetimde Etik",
        questionCount: 1,
        icon: "🎯",
        flashcards: [],
        questions: [
            { q: "Kamu Görevlileri Etik Davranış İlkeleri ile Başvuru Usul ve Esasları Hakkında Yönetmelik'e göre, etik sözleşme hangi merciden onay alındıktan sonra imzalanır?", options: ["Atamaya yetkili amir onayından sonra", "Personel biriminin uygun görüşünden sonra", "Herhangi bir onay gerekmeden göreve başlama tarihinde", "Kurum etik komisyonu onayından sonra", "Çalışma ve Sosyal Güvenlik Bakanlığı onayından sonra"], answer: 2 }
        ]
    },
    {
        id: 6,
        name: "Türk İdare Sistemi",
        questionCount: 1,
        icon: "🏛️",
        flashcards: [],
        questions: [
            { q: "Kamu tüzel kişiliğine sahip olmayan ancak devletin personel rejimine tabi olmayan, kendine has bir yapıya sahip ve bağımsız bütçeli kuruluş aşağıdakilerden hangisidir?", options: ["Kamu iktisadi teşebbüsü", "Düzenleyici ve denetleyici kurum", "Döner sermaye işletmesi", "Kamu kurumu niteliğinde meslek kuruluşu", "Bağımsız idari otorite (üst kurul)"], answer: 2 }
        ]
    },
    {
        id: 7,
        name: "Protokol Kuralları",
        questionCount: 1,
        icon: "🎩",
        flashcards: [],
        questions: [
            { q: "Resmi yazışmalarda 'paraf' ile ilgili aşağıdakilerden hangisi yanlıştır?", options: ["Yazıyı hazırlayan, kontrol eden ve gerekli hallerde koordine eden görevliler paraf atar.", "Paraflar yazının sol alt köşesine atılır.", "Paraflar yazının arka yüzüne atılır.", "Elektronik ortamda hazırlanan yazılarda paraf elektronik olarak atılabilir.", "Paraf, yazının resmi olarak imzalanmadan önceki bir aşamasıdır."], answer: 1 }
        ]
    },
    {
        id: 8,
        name: "Atatürk İlkeleri ve İnkılap Tarihi",
        questionCount: 2,
        icon: "🇹🇷",
        flashcards: [],
        questions: [
            { q: "I. TBMM'nin toplanması (23 Nisan 1920)\nII. Saltanatın kaldırılması (1 Kasım 1922)\nIII. Cumhuriyetin ilanı (29 Ekim 1923)\nIV. Halifeliğin kaldırılması (3 Mart 1924)\nV. Anayasa'dan 'Devletin dini İslam'dır' ifadesinin çıkarılması (1928)\n\nYukarıdaki olayların tamamı birlikte aşağıdaki Atatürk ilkelerinden hangisinin gerçekleştirilmesiyle doğrudan ilişkilidir?", options: ["Milliyetçilik", "Cumhuriyetçilik", "Halkçılık", "Laiklik", "Devletçilik"], answer: 3 },
            { q: "Montrö Boğazlar Sözleşmesi (1936) ile Boğazlar üzerindeki Türk egemenliğini sınırlayan önceki sözleşmenin adı aşağıdakilerden hangisidir?", options: ["Sevr Antlaşması", "Mudanya Ateşkes Antlaşması", "Lozan Boğazlar Sözleşmesi", "Ankara Antlaşması", "Moskova Antlaşması"], answer: 2 }
        ]
    },
    {
        id: 9,
        name: "Genel Kültür",
        questionCount: 5,
        icon: "🌍",
        flashcards: [],
        questions: [
            { q: "Türkiye'de 'coğrafi işaret tescili' alan ilk ürün aşağıdakilerden hangisidir?", options: ["Malatya kayısısı", "Antep baklavası", "Ezine peyniri", "Giresun fındığı", "Aydın inciri"], answer: 2 },
            { q: "Aşağıdaki BM kuruluşlarından hangisi savaş suçlarını ve insanlığa karşı suçları yargılamak amacıyla kurulmuş daimi mahkemedir?", options: ["Uluslararası Adalet Divanı (UAD)", "Uluslararası Ceza Mahkemesi (UCM)", "Lahey Tahkim Mahkemesi", "Avrupa İnsan Hakları Mahkemesi", "BM İnsan Hakları Konseyi"], answer: 1 },
            { q: "Türkiye Cumhuriyeti tarihinde ilk koalisyon hükümeti hangi yılda ve kimler arasında kurulmuştur?", options: ["1961 - CHP-AP koalisyonu", "1973 - CHP-MSP koalisyonu", "1974 - CHP-MSP koalisyonu", "1965 - AP-MP koalisyonu", "1971 - Teknokratlar hükümeti"], answer: 0 },
            { q: "Ekonomik İşbirliği ve Kalkınma Teşkilatı (OECD) hangi yılda kurulmuştur ve Türkiye kuruluşa ne zaman üye olmuştur?", options: ["1961'de kuruldu, Türkiye kurucu üyedir", "1957'de kuruldu, Türkiye 1961'de üye oldu", "1948'de kuruldu, Türkiye 1952'de üye oldu", "1945'te kuruldu, Türkiye kurucu üyedir", "1973'te kuruldu, Türkiye 1980'de üye oldu"], answer: 0 },
            { q: "Aşağıdaki Türk edebiyatçılarından hangisi hem Türk Dil Kurumu hem de Türk Tarih Kurumu'nun kurucuları arasındadır?", options: ["Reşit Galip", "Afet İnan", "Yusuf Akçura", "Şemsettin Günaltay", "Fuad Köprülü"], answer: 2 }
        ]
    },
    {
        id: 10,
        name: "T.C. Anayasası",
        questionCount: 4,
        icon: "📜",
        flashcards: [],
        questions: [
            { q: "T.C. Anayasası'na göre, bir siyasi partinin Anayasa Mahkemesince temelli kapatılmasına karar verilebilmesi için gerekli oy çoğunluğu aşağıdakilerden hangisidir?", options: ["Üye tamsayısının salt çoğunluğu", "Toplantıya katılan üyelerin salt çoğunluğu", "Üye tamsayısının üçte ikisi", "Toplantıya katılanların üçte ikisi", "Oybirliği"], answer: 2 },
            { q: "T.C. Anayasası'na göre, olağanüstü hal ilan edilmesi durumunda TBMM'nin toplanamaması veya toplantı yeter sayısının sağlanamaması halinde Cumhurbaşkanlığı kararnameleri hakkında aşağıdakilerden hangisi doğrudur?", options: ["Kararnameler kendiliğinden yürürlükten kalkar.", "Kararnameler bir ay içinde TBMM tarafından onaylanmazsa yürürlükten kalkar.", "TBMM toplanır toplanmaz kararnameyi üç ay içinde görüşür.", "Kararnameler olağanüstü hal süresince yürürlükte kalır, TBMM toplantı nisabını sağladığında onay için sunulur.", "Danıştay kararnamelerin yürürlüğünü durdurabilir."], answer: 3 },
            { q: "T.C. Anayasası'na göre, kanun hükmünde kararname (KHK) çıkarma yetkisi 2017 Anayasa değişikliği ile kaldırılmış olup, aşağıdakilerden hangisi Cumhurbaşkanlığı kararnamesi ile düzenlenemeyecek konular arasında sayılmamıştır?", options: ["Temel haklar", "Kişi hakları ve ödevleri", "Siyasi haklar ve ödevler", "Yürütme yetkisine ilişkin konular", "Anayasada münhasıran kanunla düzenlenmesi öngörülen konular"], answer: 3 },
            { q: "T.C. Anayasası'na göre, milletvekillerinin Meclis çalışmalarındaki oy ve sözlerinden dolayı sorumlu tutulamaması kuralının istisnası olarak milletvekillerinin Meclis İç Tüzüğü'nde yer alan yaptırımlardan hangisine tabi tutulabileceği belirtilmiştir?", options: ["Kınama", "Yasama dokunulmazlığının kaldırılması", "Meclisten geçici çıkarma", "Para cezası", "İhtar"], answer: 2 }
        ]
    },
    {
        id: 11,
        name: "657 sayılı Devlet Memurları Kanunu",
        questionCount: 4,
        icon: "👨‍💼",
        flashcards: [],
        questions: [
            { q: "657 sayılı Devlet Memurları Kanunu'na göre, aşağıdaki durumların hangisinde memura aylıksız izin verilmez?", options: ["Askerlik süresince", "Yabancı memlekette hizmet alması için", "Bakmakla yükümlü olduğu veya refakat etmediği takdirde hayatı tehlikeye girecek ana, baba, eş ve çocukları için", "5 yaşından küçük çocuğu olup eşi de çalışan memura", "Doğum yapan memurun isteği üzerine 24 aya kadar"], answer: 3 },
            { q: "657 sayılı Devlet Memurları Kanunu'na göre, atamalarda görevin gerektirdiği niteliklere ve mesleklere ilişkin servis farklılıkları dışında, eşe göre ayrım yapılamayacağını düzenleyen temel ilke aşağıdakilerden hangisidir?", options: ["Liyakat ilkesi", "Kariyer ilkesi", "Tarafsızlık ilkesi", "Sınıflandırma ilkesi", "Eşitlik ilkesi"], answer: 4 },
            { q: "657 sayılı Devlet Memurları Kanunu'na göre, memurun kusurlu olduğu hallerde, Sayıştay'ın merkezine ve mülhak dairelerine çalışmak üzere atanan memurlar dışındaki tüm memurlar için kasting (Kanunda geçen haliyle 'kişiler'den doğan) zararların tazminine ilişkin zamanaşımı süresi aşağıdakilerden hangisidir?", options: ["1 yıl", "2 yıl", "3 yıl", "5 yıl", "10 yıl"], answer: 0 },
            { q: "657 sayılı Devlet Memurları Kanunu'na göre, 'müfettiş yardımcılığı' hangi hizmet sınıfında yer almaktadır?", options: ["Genel İdare Hizmetleri Sınıfı", "Teknik Hizmetler Sınıfı", "Mülki İdare Amirliği Hizmetleri Sınıfı", "Eğitim ve Öğretim Hizmetleri Sınıfı", "Denetim Hizmetleri Sınıfı (eski adıyla Yardımcı Hizmetler)"], answer: 0 }
        ]
    },
    {
        id: 12,
        name: "1739 sayılı Milli Eğitim Temel Kanunu",
        questionCount: 4,
        icon: "🎓",
        flashcards: [],
        questions: [
            { q: "1739 sayılı Millî Eğitim Temel Kanunu'nun 'eğitim kampüsleri' ile ilgili maddesi incelendiğinde, aşağıdakilerden hangisi kampüs kapsamında birlikte yer alabilecek kurumlar arasında sayılmamıştır?", options: ["İlkokul", "Ortaokul", "Lise", "Üniversite", "İmam hatip ortaokulu"], answer: 3 },
            { q: "1739 sayılı Millî Eğitim Temel Kanunu'na göre, 'eğitimde fırsat ve imkân eşitliği' ilkesinin hayata geçirilmesi için devletin sağlayacağı desteklerden biri aşağıdakilerden hangisi değildir?", options: ["Maddi imkânlardan yoksun başarılı öğrencilere burs vermek", "Parasız yatılı okul açmak", "Özel eğitime muhtaç çocuklar için özel tedbirler almak", "Koşulları elverişsiz yerlerde öğretmenlere ek ücret ödemek", "Özel okulları desteklemek"], answer: 4 },
            { q: "1739 sayılı Millî Eğitim Temel Kanunu'na göre, öğretmenlik mesleği için Milli Eğitim Bakanlığınca tespit edilen öğretmenlik alanları dışında kalan alanlarda hangi eğitim zorunludur?", options: ["Yüksek lisans eğitimi", "Pedagojik formasyon programı", "Aday öğretmenlik eğitimi", "Seminer eğitimi", "Hizmet içi eğitim"], answer: 1 },
            { q: "1739 sayılı Millî Eğitim Temel Kanunu'na göre, okul öncesi eğitimin amaçlarından biri aşağıdakilerden hangisidir?", options: ["Okuma yazma öğretmek", "Akademik bilgi vermek", "Çocukların beden, zihin ve duygu gelişmesini ve iyi alışkanlıklar kazanmasını sağlamak", "İlkokula hazırlık sınavına hazırlamak", "Yabancı dil öğretmek"], answer: 2 }
        ]
    },
    {
        id: 13,
        name: "222 sayılı İlköğretim ve Eğitim Kanunu",
        questionCount: 4,
        icon: "🏫",
        flashcards: [],
        questions: [
            { q: "222 sayılı İlköğretim ve Eğitim Kanunu'na göre, gezici öğretmenlik müessesesi ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["Gezici öğretmenlik kaldırılmıştır.", "Gezici öğretmenler köyler arasında dolaşarak veya bir merkezde toplayarak grup halinde öğretim yapar.", "Gezici öğretmenler sadece yaz aylarında görev yapar.", "Gezici öğretmenler en az 10 yıl deneyimli olmalıdır.", "Gezici öğretmenlere ücret ödenmez."], answer: 1 },
            { q: "222 sayılı İlköğretim ve Eğitim Kanunu'na göre, köylerde öğretmen lojmanlarının 'demirbaş eşyası' aşağıdakilerden hangisi tarafından karşılanır?", options: ["Milli Eğitim Bakanlığı bütçesi", "İl özel idaresi bütçesi", "Köy bütçesi", "Okul-aile birliği", "Belediye bütçesi"], answer: 1 },
            { q: "222 sayılı İlköğretim ve Eğitim Kanunu'na göre, ilköğretim kurumlarının 'inşaat, büyük onarım, okul eşyası ve ders aletleri' giderleri aşağıdakilerden hangisi tarafından karşılanır?", options: ["Yalnızca Milli Eğitim Bakanlığı bütçesi", "Yalnızca il özel idaresi bütçesi", "Milli Eğitim Bakanlığı bütçesinden veya bu idarece istenen hallerde il özel idarelerince", "Köy bütçesi", "Belediye bütçesi"], answer: 2 },
            { q: "222 sayılı İlköğretim ve Eğitim Kanunu'na göre, 'köylerde okul arsasının temin edilmesi' görevi aşağıdakilerden hangisine aittir?", options: ["İl özel idaresi", "Milli Eğitim Bakanlığı", "Köy tüzel kişiliği", "Belediye", "İlçe milli eğitim müdürlüğü"], answer: 2 }
        ]
    },
    {
        id: 14,
        name: "652 sayılı MEB Teşkilat ve Görevleri KHK",
        questionCount: 4,
        icon: "🏢",
        flashcards: [],
        questions: [
            { q: "652 sayılı Kanun Hükmünde Kararname'ye göre, Bakanlık merkez teşkilatında 'Bakan Yardımcısı' sayısı en fazla kaç olabilir?", options: ["1", "2", "3", "4", "Sınırsız"], answer: 3 },
            { q: "652 sayılı Kanun Hükmünde Kararname'ye göre, 'Türk kültürünün yurt dışında tanıtılması, yayılması ve korunması' görevi aşağıdaki birimlerden hangisine aittir?", options: ["Avrupa Birliği ve Dış İlişkiler Genel Müdürlüğü", "Strateji Geliştirme Başkanlığı", "Öğretmen Yetiştirme ve Geliştirme Genel Müdürlüğü", "Hayat Boyu Öğrenme Genel Müdürlüğü", "Talim ve Terbiye Kurulu Başkanlığı"], answer: 0 },
            { q: "652 sayılı Kanun Hükmünde Kararname'ye göre, okul ve kurum müdürleri aşağıdakilerden hangisi tarafından atanır?", options: ["Milli Eğitim Bakanı", "İl Milli Eğitim Müdürü", "İlçe Milli Eğitim Müdürü", "Vali", "Kaymakam"], answer: 0 },
            { q: "652 sayılı Kanun Hükmünde Kararname'ye göre, Talim ve Terbiye Kurulu üyelerinin görev süresi kaç yıldır?", options: ["2 yıl", "3 yıl", "4 yıl", "5 yıl", "Süre sınırı yoktur"], answer: 2 }
        ]
    },
    {
        id: 15,
        name: "4483 sayılı Memurlar Hakkında Soruşturma Kanunu",
        questionCount: 2,
        icon: "⚖️",
        flashcards: [],
        questions: [
            { q: "4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun'a göre, yapılan ihbar veya şikâyetin 'soyut ve genel nitelikte' olduğu anlaşılırsa ne işlem yapılır?", options: ["Soruşturma izni verilmemesine karar verilir.", "Ön inceleme başlatılır.", "Şikâyet Cumhuriyet Başsavcılığına gönderilir.", "İhbar veya şikâyet işleme konulmaz.", "İlgili memur hakkında disiplin soruşturması başlatılır."], answer: 3 },
            { q: "4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun kapsamına girmeyen aşağıdaki durumlardan hangisidir?", options: ["Türk Ceza Kanunu'nun 94, 95 ve 96. maddelerinde yazılı işkence suçları", "Görevi kötüye kullanma suçları", "Zimmet suçları", "Rüşvet suçları", "İhaleye fesat karıştırma suçları"], answer: 0 }
        ]
    },
    {
        id: 16,
        name: "5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu",
        questionCount: 2,
        icon: "💰",
        flashcards: [],
        questions: [
            { q: "5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu'na göre, 'stratejik plan hazırlamakla yükümlü olacak kamu idarelerinin ve stratejik planlama sürecine ilişkin takvimin' tespitinde yetkili kurum aşağıdakilerden hangisidir?", options: ["Sayıştay", "Maliye Bakanlığı", "TBMM", "Cumhurbaşkanlığı Strateji ve Bütçe Başkanlığı (eski DPT)", "Bakanlar Kurulu"], answer: 3 },
            { q: "5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu'na göre, merkezi yönetim bütçe kanununun görüşülme süreci ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["Bütçe görüşmeleri Genel Kurul'da başlar.", "Plan ve Bütçe Komisyonu'nda bütçe görüşmelerine Hükümet adına sadece Maliye Bakanı katılır.", "Bütçe kanun tasarısı mali yılbaşından en az 75 gün önce TBMM'ye sunulur.", "Bütçe görüşmeleri ancak toplantıya katılanların salt çoğunluğu ile karara bağlanır.", "Bütçe kanunu Cumhurbaşkanı tarafından veto edilemez."], answer: 2 }
        ]
    },
    {
        id: 17,
        name: "2886 sayılı Devlet İhale Kanunu",
        questionCount: 2,
        icon: "📋",
        flashcards: [],
        questions: [
            { q: "2886 sayılı Devlet İhale Kanunu'na göre, 'pazarlık usulü' ile yapılabilecek işler arasında aşağıdakilerden hangisi yer almaz?", options: ["Devletin özel mülkiyetindeki taşınmaz malların satışı veya kiralanması", "İlk ihalede istekli çıkmayan veya kabul edilebilir teklif alınamayan işler", "Her yıl Bütçe Kanunu ile tespit edilen parasal sınırı aşmayan işler", "Özelliği bulunan ve Özel Kanunlarına göre yapılacak satımlar", "Süreklilik arz eden ve kesintiye uğraması sakıncalı olan hizmetlerin ivedi hallerde yapılması"], answer: 0 },
            { q: "2886 sayılı Devlet İhale Kanunu'na göre, 'ihale komisyonlarının karar verememesi' durumunda yetkili merci aşağıdakilerden hangisidir?", options: ["İta amiri", "Sayıştay", "Maliye Bakanlığı", "İl idare kurulu", "Mülki amir"], answer: 0 }
        ]
    },
    {
        id: 18,
        name: "4734 sayılı Kamu İhale Kanunu",
        questionCount: 2,
        icon: "📊",
        flashcards: [],
        questions: [
            { q: "4734 sayılı Kamu İhale Kanunu'na göre, 'çerçeve anlaşma' ile ilgili aşağıdakilerden hangisi yanlıştır?", options: ["Çerçeve anlaşmanın süresi dört yılı geçemez.", "Çerçeve anlaşma ile ihalelerde yaklaşık maliyetin ihale ilanında gösterilmesi zorunludur.", "Çerçeve anlaşma, bir veya birden fazla idare ile bir veya birden fazla istekli arasında belirli bir zaman aralığında gerçekleştirilecek alımlara ilişkin koşulları belirler.", "Çerçeve anlaşmalar rekabeti engellemek amacıyla kullanılamaz.", "Çerçeve anlaşmalarla ilgili usul ve esaslar yönetmelikle belirlenir."], answer: 1 },
            { q: "4734 sayılı Kamu İhale Kanunu'na göre, idarenin tekliflerin değerlendirilmesi aşamasında 'aşırı düşük teklif' sorgulaması yapması durumunda açıklama istenen istekli kaç gün içinde açıklama yapmak zorundadır?", options: ["3 iş günü", "5 iş günü", "En az 3 iş günü", "En az 5 iş günü", "7 iş günü"], answer: 2 }
        ]
    },
    {
        id: 19,
        name: "4735 sayılı Kamu İhale Sözleşmeleri Kanunu",
        questionCount: 3,
        icon: "📝",
        flashcards: [],
        questions: [
            { q: "4735 sayılı Kamu İhale Sözleşmeleri Kanunu'na göre, 'iş deneyim belgesi düzenlenme süresi' ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["İlgilinin başvurusu üzerine 30 gün içinde düzenlenir.", "Başvuru gerekmeksizin işin bitirilmesinden itibaren 30 gün içinde düzenlenir.", "Gerçek veya tüzel kişilerin başvurusu üzerine başvuru tarihinden itibaren 20 iş günü içinde belge düzenlenerek verilir.", "İşin bitirilmesinden itibaren en geç 15 gün içinde re'sen düzenlenir.", "Başvuru halinde 10 iş günü içinde düzenlenir."], answer: 2 },
            { q: "4735 sayılı Kamu İhale Sözleşmeleri Kanunu'na göre, sözleşmenin uygulanması sırasında iş artışı yapılması ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["Mal ve hizmet alımlarında iş artışı yapılamaz.", "Yapım işlerinde iş artışı %30'a kadar yapılabilir.", "Mal alımlarında iş artışı %10'u geçemez.", "İş artışı ancak mahkeme kararıyla yapılabilir.", "İş artışlarında ek sözleşme yapılması zorunludur."], answer: 0 },
            { q: "4735 sayılı Kamu İhale Sözleşmeleri Kanunu'na göre, 'fiyat farkı' ödenmesinde esas alınacak tarih aşağıdakilerden hangisidir?", options: ["İhale ilan tarihi", "Tekliflerin değerlendirilme tarihi", "İhale tarihi", "Sözleşme imza tarihi", "İşe başlama tarihi"], answer: 2 }
        ]
    },
    {
        id: 20,
        name: "5442 sayılı İl İdaresi Kanunu",
        questionCount: 1,
        icon: "🗺️",
        flashcards: [],
        questions: [
            { q: "5442 sayılı İl İdaresi Kanunu'na göre, valinin illerde 'devletin ve hükümetin temsilcisi ve ayrı ayrı her bakanın mümessili' sıfatıyla sahip olduğu yetkilerden biri aşağıdakilerden hangisi değildir?", options: ["İl sınırları içinde bulunan genel ve özel bütün kolluk kuvvetlerinin amiri olmak", "Suç işlenmesini önlemek, kamu düzenini korumak için gerekli tedbirleri almak", "Kanun, Cumhurbaşkanlığı kararnamesi ve diğer mevzuatın verdiği yetkiyi kullanmak", "Adli yargı işlemlerine müdahale etmek", "İlin genel idaresinden sorumlu olmak"], answer: 3 }
        ]
    },
    {
        id: 21,
        name: "5482 sayılı İl Şurası Kanunu",
        questionCount: 3,
        icon: "🏛️",
        flashcards: [],
        questions: [
            { q: "5482 sayılı İl Şurası Kanunu'na göre, il şurasının olağanüstü toplanması hangi koşullarda gerçekleşir?", options: ["Yalnızca valinin çağrısıyla", "Milli Eğitim Bakanının talebiyle", "Üyelerin salt çoğunluğunun talebiyle", "Valinin çağrısı veya şura üyelerinin salt çoğunluğunun yazılı talebiyle", "Yalnızca TBMM kararıyla"], answer: 3 },
            { q: "5482 sayılı İl Şurası Kanunu'na göre, il şurasının toplanmasından önce gündem maddelerinin belirlenmesi ve hazırlık çalışmalarını yürütmekle görevli birim aşağıdakilerden hangisidir?", options: ["Valilik", "İl milli eğitim müdürlüğü", "İl genel meclisi", "Belediye", "İl planlama ve koordinasyon müdürlüğü"], answer: 1 },
            { q: "5482 sayılı İl Şurası Kanunu'na göre, il şurasının aldığı kararların 'yükümlülük' niteliği ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["İl şurası kararları bağlayıcı ve zorunludur.", "İl şurası kararları Milli Eğitim Bakanlığı onayına tabidir.", "İl şurası kararları tavsiye niteliğindedir.", "İl şurası kararları il genel meclisi tarafından onaylanır.", "İl şurası kararları Cumhurbaşkanlığı onayına sunulur."], answer: 2 }
        ]
    },
    {
        id: 22,
        name: "4688 sayılı Kamu Görevlileri Sendikaları ve Toplu Sözleşme Kanunu",
        questionCount: 3,
        icon: "✊",
        flashcards: [],
        questions: [
            { q: "4688 sayılı Kamu Görevlileri Sendikaları ve Toplu Sözleşme Kanunu'na göre, sendika üyeliğinden çekilmenin hüküm ifade etmesi için gereken süre aşağıdakilerden hangisidir?", options: ["Müracaat tarihinden itibaren hemen", "Müracaat tarihinden itibaren 15 gün sonra", "Müracaat tarihinden itibaren 30 gün sonra", "Üyelik aidatının son ödendiği ay sonunda", "Çekilme işleminin sisteme girilmesinden 7 gün sonra"], answer: 2 },
            { q: "4688 sayılı Kamu Görevlileri Sendikaları ve Toplu Sözleşme Kanunu'na göre, Kamu Görevlileri Hakem Kurulu kararları ne zaman kesinleşir ve uygulamaya konulur?", options: ["TBMM tarafından onaylandıktan sonra", "Cumhurbaşkanı tarafından onaylandıktan sonra", "Danıştay denetimine tabi olarak yürürlüğe girer", "Kesindir ve toplu sözleşme olarak uygulanır", "Çalışma ve Sosyal Güvenlik Bakanlığı onayından sonra"], answer: 3 },
            { q: "4688 sayılı Kamu Görevlileri Sendikaları ve Toplu Sözleşme Kanunu'na göre, 'yetkili sendika' veya 'yetkili konfederasyon' statüsünün belirlenmesinde esas alınan ölçüt aşağıdakilerden hangisidir?", options: ["En fazla üyeye sahip sendika", "En eski kuruluş tarihine sahip sendika", "En çok toplu sözleşme imzalamış sendika", "Hizmet kolunda en çok üyeye sahip sendika", "Bakanlıkça belirlenen sendika"], answer: 3 }
        ]
    },
    {
        id: 23,
        name: "5580 sayılı Özel Öğretim Kurumları Kanunu",
        questionCount: 3,
        icon: "🎒",
        flashcards: [],
        questions: [
            { q: "5580 sayılı Özel Öğretim Kurumları Kanunu'na göre, bir özel okul veya kurumun ruhsatının 'geçici olarak durdurulamayacağı' durumlardan biri aşağıdakilerden hangisidir?", options: ["Kurum binasında can ve mal güvenliği açısından tehlike oluşması", "Kurumun eğitim-öğretim programlarına uymaması", "Kurumun bina ve bahçe düzeni açısından standartları karşılamaması", "Kurumda görevli personelin yargılanıyor olması", "Kurumun izinsiz olarak şube açması"], answer: 3 },
            { q: "5580 sayılı Özel Öğretim Kurumları Kanunu'na göre, özel okullarda görev yapan yönetici ve öğretmenlerin 'özlük hakları' ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["Devlet okullarındaki meslektaşlarıyla aynı özlük haklarına sahiptir.", "Toplu sözleşme kapsamında belirlenir.", "Kurumla yapılan sözleşme ile belirlenir, iş mevzuatına tabidir.", "Milli Eğitim Bakanlığı tarafından merkezi olarak belirlenir.", "657 sayılı Devlet Memurları Kanunu'na tabidir."], answer: 2 },
            { q: "5580 sayılı Özel Öğretim Kurumları Kanunu'na göre, 'milletlerarası özel öğretim kurumu' açabileceklerin arasında aşağıdakilerden hangisi yer almaz?", options: ["Yabancı devletler", "Türkiye'de faaliyet gösteren uluslararası kuruluşlar", "Türk vatandaşları", "Karşılıklılık ilkesi çerçevesinde yabancı gerçek ve tüzel kişiler", "Uluslararası antlaşmalara dayalı olarak kurulan kuruluşlar"], answer: 2 }
        ]
    }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { exam3Topics };
}
