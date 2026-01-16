// Şube Müdürlüğü Sınav Hazırlık - Veri Dosyası
// Geçmiş sınav sorularından esinlenerek hazırlanmış kapsamlı soru bankası

const examData = {
    title: "Şube Müdürlüğü Sınavı",
    totalQuestions: 60,
    topics: [
        {
            id: 1,
            name: "Türkçe Dil Bilgisi",
            questionCount: 5,
            icon: "📖",
            flashcards: [
                { front: "Fiil nedir?", back: "Varlıkların yaptığı işi, hareketi veya durumu bildiren sözcüklere fiil denir." },
                { front: "Zarf nedir?", back: "Fiilleri, sıfatları veya başka zarfları çeşitli yönlerden belirleyen sözcüklerdir." },
                { front: "Cümlenin öğeleri nelerdir?", back: "Özne, yüklem, nesne, dolaylı tümleç ve zarf tümleci." },
                { front: "Birleşik cümle nedir?", back: "İçinde birden fazla yargı bulunan, bağımlı veya bağımsız cümle gruplarından oluşan cümlelerdir." },
                { front: "Anlam kayması nedir?", back: "Sözcüklerin zaman içinde ilk anlamlarından uzaklaşarak farklı anlamlar kazanmasıdır." },
                { front: "Devrik cümle nedir?", back: "Yüklemi sonda olmayan cümlelerdir." },
                { front: "İsim tamlaması nedir?", back: "Tamlayan ve tamlanan olmak üzere iki isimden oluşan sözcük grubudur." }
            ],
            questions: [
                { q: "Aşağıdakilerden hangisi cümlenin temel öğelerindendir?", options: ["Zarf tümleci", "Dolaylı tümleç", "Yüklem", "Nesne"], answer: 2 },
                { q: "'O, dün akşam eve geç geldi.' cümlesinde özne hangisidir?", options: ["O", "Dün akşam", "Eve", "Geç geldi"], answer: 0 },
                { q: "Aşağıdaki cümlelerin hangisinde zarf tümleci vardır?", options: ["Kitabı masaya koydu.", "Bahçede oturuyordu.", "Çok çalıştı.", "Onu gördüm."], answer: 2 },
                { q: "'Yarın geleceğim.' cümlesindeki 'yarın' sözcüğü hangi cümle öğesidir?", options: ["Nesne", "Özne", "Zarf tümleci", "Dolaylı tümleç"], answer: 2 },
                { q: "Aşağıdaki cümlelerin hangisinde belirtili isim tamlaması vardır?", options: ["Kapı kolu kırıldı.", "Okul bahçesi büyük.", "Annemin arabası", "Çocuk kitabı"], answer: 2 }
            ]
        },
        {
            id: 2,
            name: "Yönetimde İnsan İlişkileri ve Kariyer",
            questionCount: 5,
            icon: "🤝",
            flashcards: [
                { front: "İnsan ilişkileri yaklaşımı nedir?", back: "Çalışanların sosyal ve psikolojik ihtiyaçlarını ön plana çıkaran, motivasyon ve iş tatminini önemseyen yönetim yaklaşımıdır." },
                { front: "Hawthorne Araştırmaları nedir?", back: "Elton Mayo ve arkadaşlarının yaptığı, iş veriminin fiziksel koşullardan çok sosyal faktörlerden etkilendiğini ortaya koyan ünlü araştırmalardır." },
                { front: "Motivasyon nedir?", back: "Bireyleri belirli bir hedefe yönelik davranmaya iten içsel veya dışsal güdülerdir." },
                { front: "İletişim engelleri nelerdir?", back: "Fiziksel, anlambilimsel, psikolojik ve örgütsel engeller olarak sınıflandırılır." },
                { front: "Kariyer platosu/sürdürme aşaması nedir?", back: "Bireyin gelişiminin sınırlarına erişip yoğunlaştığı, yeni kazançlar yerine mevcut kazançları korumaya yöneldiği kariyer aşamasıdır." },
                { front: "Kariyer aşamaları nelerdir?", back: "Meslek seçimi, oluşum, gelişme, sürdürme ve çekilme aşamalarıdır." }
            ],
            questions: [
                { q: "Hawthorne araştırmalarını kim yönetmiştir?", options: ["Frederick Taylor", "Henri Fayol", "Elton Mayo", "Max Weber"], answer: 2 },
                { q: "Aşağıdakilerden hangisi etkili iletişimin özelliklerinden değildir?", options: ["Açıklık", "Tutarlılık", "Gizlilik", "Empati"], answer: 2 },
                { q: "Bireyin gelişiminin sınırlarına erişip mevcut kazançlarını korumaya yöneldiği kariyer aşaması hangisidir?", options: ["Çekilme", "Oluşum", "Gelişme", "Sürdürme"], answer: 3 },
                { q: "Aşağıdakilerden hangisi Maslow'un ihtiyaçlar hiyerarşisinde en üst düzeyde yer alır?", options: ["Güvenlik", "Saygınlık", "Kendini gerçekleştirme", "Sevgi ve ait olma"], answer: 2 },
                { q: "Kariyer sürdürme aşamasında bireyin en önemli ihtiyacı hangisidir?", options: ["Güvenlik", "Saygınlık", "Fizyolojik", "Ait olma"], answer: 1 }
            ]
        },
        {
            id: 3,
            name: "Yönetim, Liderlik ve Organizasyon",
            questionCount: 5,
            icon: "👔",
            flashcards: [
                { front: "Yönetim nedir?", back: "Örgütsel amaçlara ulaşmak için kaynakların etkin ve verimli kullanılması sürecidir." },
                { front: "Liderlik nedir?", back: "İnsanları ortak hedefler doğrultusunda etkileme ve yönlendirme sürecidir." },
                { front: "Yönetimin temel fonksiyonları nelerdir?", back: "Planlama, örgütleme, yöneltme (yürütme) ve denetim." },
                { front: "Otoriter liderlik nedir?", back: "Karar verme yetkisinin tamamen liderde olduğu, astların kararlara katılmadığı liderlik tarzıdır." },
                { front: "Demokratik liderlik nedir?", back: "Karar alma sürecinde astların görüşlerinin alındığı, katılımcı liderlik tarzıdır." },
                { front: "Organizasyon şeması nedir?", back: "Örgütün yapısını, birimleri ve aralarındaki ilişkileri gösteren görsel şemadır." },
                { front: "Yetki devri nedir?", back: "Yöneticinin yetkilerinin bir kısmını astlarına aktarmasıdır." }
            ],
            questions: [
                { q: "Aşağıdakilerden hangisi yönetimin temel fonksiyonlarından biri değildir?", options: ["Planlama", "Örgütleme", "Pazarlama", "Denetim"], answer: 2 },
                { q: "Astların karar alma sürecine katıldığı liderlik tarzı hangisidir?", options: ["Otoriter", "Demokratik", "Serbest bırakıcı", "Bürokratik"], answer: 1 },
                { q: "SWOT analizinde 'T' neyi ifade eder?", options: ["Teknoloji", "Tehditler", "Takım", "Taktik"], answer: 1 },
                { q: "Aşağıdakilerden hangisi yönetim piramidinin en üst kademesidir?", options: ["Alt kademe yönetim", "Orta kademe yönetim", "Üst kademe yönetim", "Teknik personel"], answer: 2 },
                { q: "Henry Fayol'un yönetim ilkelerinden hangisi 'her astın yalnızca bir üstten emir alması' anlamına gelir?", options: ["İş bölümü", "Komuta birliği", "Merkezileşme", "Düzen"], answer: 1 }
            ]
        },
        {
            id: 4,
            name: "İnsan Hakları ve Demokrasi",
            questionCount: 3,
            icon: "⚖️",
            flashcards: [
                { front: "İnsan hakları nedir?", back: "İnsanların doğuştan sahip olduğu, vazgeçilmez ve devredilemez haklardır." },
                { front: "İnsan Hakları Evrensel Beyannamesi ne zaman kabul edildi?", back: "10 Aralık 1948 tarihinde BM Genel Kurulu tarafından kabul edildi." },
                { front: "Demokrasi nedir?", back: "Egemenliğin halka ait olduğu, halkın yönetime katıldığı devlet biçimidir." },
                { front: "Kuvvetler ayrılığı ilkesi nedir?", back: "Yasama, yürütme ve yargı erklerinin birbirinden bağımsız olması ilkesidir." }
            ],
            questions: [
                { q: "İnsan Hakları Evrensel Beyannamesi ne zaman kabul edilmiştir?", options: ["1945", "1948", "1950", "1953"], answer: 1 },
                { q: "Kuvvetler ayrılığı ilkesini ilk ortaya atan düşünür kimdir?", options: ["Rousseau", "Locke", "Montesquieu", "Hobbes"], answer: 2 },
                { q: "Aşağıdakilerden hangisi temel insan haklarından değildir?", options: ["Yaşam hakkı", "Seyahat hakkı", "İşkence görmeme hakkı", "Lüks yaşam hakkı"], answer: 3 }
            ]
        },
        {
            id: 5,
            name: "Yönetimde Etik",
            questionCount: 4,
            icon: "🎯",
            flashcards: [
                { front: "Etik nedir?", back: "Doğru ve yanlışın ne olduğunu inceleyen, ahlaki değerleri ve davranış kurallarını konu alan felsefe dalıdır." },
                { front: "Kamu etiği nedir?", back: "Kamu görevlilerinin uyması gereken ahlaki ilkeler ve davranış kurallarıdır." },
                { front: "Çıkar çatışması nedir?", back: "Kamu görevlisinin kişisel çıkarları ile görevinin gerektirdiği sorumlulukların çelişmesi durumudur." },
                { front: "Kamu Görevlileri Etik Davranış İlkeleri nelerdir?", back: "Dürüstlük, tarafsızlık, saydamlık, hesap verebilirlik, kamu yararı gözetme gibi ilkelerdir." },
                { front: "Etik mevzuatına uygun davranış nedir?", back: "Kanun, yönetmelik ve etik kurallarına uygun hareket etmektir." }
            ],
            questions: [
                { q: "Kamu görevlilerinin tarafsızlık ilkesine uygun davranması aşağıdakilerden hangisinin gereğidir?", options: ["Verimlilik", "Etik", "Bütçe", "Hiyerarşi"], answer: 1 },
                { q: "Aşağıdakilerden hangisi bir okul yöneticisinin etik dışı davranışlardan kaçınmak için uyması gereken ilkelerden değildir?", options: ["Ayrımcılığın ortadan kaldırılması", "Etik mevzuatına uygun hareket edilmesi", "Bütün grupların hakları arasında denge kurulması", "Herkes tarafından istenen kararın her zaman doğru kabul edilmesi"], answer: 3 },
                { q: "Kamu Görevlileri Etik Kurulu hangi kurumda yer alır?", options: ["Adalet Bakanlığı", "Cumhurbaşkanlığı", "TBMM", "Sayıştay"], answer: 1 },
                { q: "Etik davranışın temel amacı nedir?", options: ["Kişisel çıkar sağlamak", "Kamu yararını gözetmek", "Üstlere yaranmak", "Terfi almak"], answer: 1 }
            ]
        },
        {
            id: 6,
            name: "Türk İdare Sistemi",
            questionCount: 5,
            icon: "🏛️",
            flashcards: [
                { front: "Merkezi idare nedir?", back: "Başkent örgütü ve taşra örgütünden oluşan, devletin temel idari yapısıdır." },
                { front: "Yerinden yönetim nedir?", back: "Belirli hizmetlerin merkezi idareden ayrı tüzel kişiliğe sahip kurumlar tarafından yürütülmesidir." },
                { front: "İl idaresi nasıl örgütlenir?", back: "Vali, il genel meclisi ve il encümeni ile yönetilir." },
                { front: "Vali kimdir?", back: "İlin en üst düzey mülki idare amiri, il genel idaresinin başıdır." },
                { front: "Kaymakam kimdir?", back: "İlçenin mülki idare amiridir, valiye bağlı olarak görev yapar." },
                { front: "İdari vesayet nedir?", back: "Merkezi idarenin, mahalli idareler üzerindeki denetim yetkisidir." }
            ],
            questions: [
                { q: "İlin en üst düzey mülki idare amiri kimdir?", options: ["Belediye Başkanı", "Kaymakam", "Vali", "Bakan"], answer: 2 },
                { q: "Aşağıdakilerden hangisi merkezi idarenin taşra teşkilatıdır?", options: ["Belediye", "Köy", "Valilik", "İl Özel İdaresi"], answer: 2 },
                { q: "İdari vesayet yetkisi hangisine karşı kullanılır?", options: ["Merkezi idare", "Bakanlar", "Mahalli idareler", "Cumhurbaşkanlığı"], answer: 2 },
                { q: "Aşağıdakilerden hangisi yerinden yönetim kuruluşlarından değildir?", options: ["Belediye", "İl Özel İdaresi", "Valilik", "Köy"], answer: 2 },
                { q: "Türkiye'de il ve ilçeler nasıl kurulur?", options: ["Bakanlar Kurulu kararı ile", "Kanunla", "Cumhurbaşkanlığı kararnamesi ile", "Vali onayı ile"], answer: 1 }
            ]
        },
        {
            id: 7,
            name: "Protokol Kuralları",
            questionCount: 4,
            icon: "🎩",
            flashcards: [
                { front: "Protokol nedir?", back: "Resmi törenlerde, toplantılarda ve ziyaretlerde uyulması gereken kurallar bütünüdür." },
                { front: "Oturma düzeninde temel kural nedir?", back: "En kıdemli veya en üst rütbeli kişi sağ tarafta oturur." },
                { front: "Bayrak protokolü nedir?", back: "Türk Bayrağı'nın diğer bayraklarla birlikte asılması durumunda uyulması gereken kurallar." },
                { front: "Makam aracı kullanım kuralı nedir?", back: "Makam aracında sağ arka koltuk en kıdemli kişiye ayrılır." },
                { front: "Hediye alma ve sunma kuralları nelerdir?", back: "Hediye değeri belirli limiti aşmamalı, kuruma beyan edilmeli ve mektupla teşekkür edilmelidir." }
            ],
            questions: [
                { q: "Protokolde en kıdemli kişi hangi tarafta oturur?", options: ["Sol", "Sağ", "Orta", "Arka"], answer: 1 },
                { q: "Makam aracında en kıdemli kişi nerede oturur?", options: ["Ön sağ koltuk", "Arka sol koltuk", "Sağ arka koltuk", "Şoförün yanı"], answer: 2 },
                { q: "Hediye alma ve sunma ile ilgili aşağıdakilerden hangisi yanlıştır?", options: ["Hediye gönderene teşekkür edilmelidir", "Parasal değeri sınırsız olabilir", "Kuruma beyan edilmelidir", "Aynı statüdeki kişilere aynı hediye verilmelidir"], answer: 1 },
                { q: "Bayrak protokolünde Türk Bayrağı hangi konumda asılır?", options: ["En sol", "En sağ veya ortada en yüksekte", "Herhangi bir yerde", "En arkada"], answer: 1 }
            ]
        },
        {
            id: 8,
            name: "Atatürk İlkeleri ve İnkılap Tarihi",
            questionCount: 5,
            icon: "🇹🇷",
            flashcards: [
                { front: "Atatürk ilkeleri nelerdir?", back: "Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik, İnkılapçılık." },
                { front: "Cumhuriyet ne zaman ilan edildi?", back: "29 Ekim 1923." },
                { front: "Halifelik ne zaman kaldırıldı?", back: "3 Mart 1924." },
                { front: "Medeni Kanun ne zaman kabul edildi?", back: "17 Şubat 1926." },
                { front: "Soyadı Kanunu ne zaman kabul edildi?", back: "21 Haziran 1934." },
                { front: "Kadınlara seçme ve seçilme hakkı ne zaman verildi?", back: "5 Aralık 1934." },
                { front: "Serbest Cumhuriyet Fırkası ne zaman kuruldu?", back: "12 Ağustos 1930." }
            ],
            questions: [
                { q: "Türkiye Cumhuriyeti hangi tarihte ilan edilmiştir?", options: ["23 Nisan 1920", "29 Ekim 1923", "30 Ağustos 1922", "19 Mayıs 1919"], answer: 1 },
                { q: "Aşağıdakilerden hangisi Atatürk ilkelerinden biri değildir?", options: ["Laiklik", "Özgürlükçülük", "Cumhuriyetçilik", "Devletçilik"], answer: 1 },
                { q: "Serbest Cumhuriyet Fırkası'nın kurucusu kimdir?", options: ["Fuat Köprülü", "Fethi Okyar", "Adnan Adıvar", "Rauf Orbay"], answer: 1 },
                { q: "Aşağıdakilerden hangisi I. Dünya Savaşı sırasında İtilaf Devletleri lehine etki eden gelişmelerdendir?", options: ["Rusya'da Bolşevik İhtilali", "Bulgaristan'ın savaşa katılması", "ABD'nin Almanya'ya savaş açması", "Çanakkale'de Osmanlı başarısı"], answer: 2 },
                { q: "Kadınlara milletvekili seçilme hakkı ne zaman verilmiştir?", options: ["1923", "1930", "1934", "1938"], answer: 2 }
            ]
        },
        {
            id: 9,
            name: "Genel Kültür ve Coğrafya",
            questionCount: 5,
            icon: "🌍",
            flashcards: [
                { front: "Türkiye'nin en büyük gölü hangisidir?", back: "Van Gölü" },
                { front: "Türkiye'nin en uzun nehri hangisidir?", back: "Kızılırmak" },
                { front: "UNESCO Dünya Mirası listesindeki Türkiye'deki yerler?", back: "Göreme, Pamukkale, İstanbul Tarihi Alanları, Hattuşa, Nemrut Dağı, Truva vb." },
                { front: "Türkiye'nin nüfusu yaklaşık kaçtır?", back: "Yaklaşık 85 milyon." },
                { front: "G20 nedir?", back: "Dünyanın en büyük 20 ekonomisini temsil eden uluslararası forum." },
                { front: "ILO (Uluslararası Çalışma Örgütü) hangi antlaşma ile kuruldu?", back: "Versay Antlaşması (1919)" },
                { front: "Türk Devletleri Teşkilatı nedir?", back: "Türk devletleri arasında işbirliğini geliştirmek amacıyla kurulan uluslararası örgüt." }
            ],
            questions: [
                { q: "Türkiye'nin en büyük gölü hangisidir?", options: ["Tuz Gölü", "Van Gölü", "Beyşehir Gölü", "Eğirdir Gölü"], answer: 1 },
                { q: "Aşağıdakilerden hangisi Türkiye'nin komşu ülkelerinden değildir?", options: ["Gürcistan", "Suriye", "Rusya", "Irak"], answer: 2 },
                { q: "Türkiye kaç coğrafi bölgeye ayrılmıştır?", options: ["5", "6", "7", "8"], answer: 2 },
                { q: "Uluslararası Çalışma Teşkilatı (ILO) hangi antlaşma ile kurulmuştur?", options: ["Paris Antlaşması", "Cenevre Antlaşması", "Versay Antlaşması", "Lizbon Antlaşması"], answer: 2 },
                { q: "Aşağıdakilerden hangisi Türk Devletleri Teşkilatı'nda gözlemci statüsündedir?", options: ["Kazakistan", "Kırgızistan", "Macaristan", "Türkmenistan"], answer: 2 }
            ]
        },
        {
            id: 10,
            name: "Türk Edebiyatı",
            questionCount: 3,
            icon: "📚",
            flashcards: [
                { front: "Yahya Kemal Beyatlı'nın eserleri nelerdir?", back: "Kendi Gök Kubbemiz, Eğil Dağlar, Aziz İstanbul" },
                { front: "Aruz ölçüsünü Türkçe'ye başarıyla uygulayan dört şair kimlerdir?", back: "Yahya Kemal Beyatlı, Mehmet Akif Ersoy, Tevfik Fikret, Ahmet Haşim" },
                { front: "Pulitzer Ödülü nedir?", back: "Columbia Üniversitesi tarafından gazetecilik, edebiyat ve müzik alanlarında verilen ödüldür." }
            ],
            questions: [
                { q: "'Kendi Gök Kubbemiz, Eğil Dağlar, Aziz İstanbul' adlı eserlerin yazarı kimdir?", options: ["Fazıl Hüsnü Dağlarca", "Mehmet Âkif Ersoy", "Ahmet Haşim", "Yahya Kemal Beyatlı"], answer: 3 },
                { q: "Columbia Üniversitesi tarafından gazetecilik ve edebiyat alanlarında verilen ödül hangisidir?", options: ["Pulitzer", "Oscar", "Emmy", "Nobel"], answer: 0 },
                { q: "Aşağıdakilerden hangisi Türk edebiyatında aruz ölçüsünü başarıyla uygulayan şairlerden değildir?", options: ["Yahya Kemal", "Mehmet Akif", "Orhan Veli", "Tevfik Fikret"], answer: 2 }
            ]
        },
        {
            id: 11,
            name: "T.C. Anayasası",
            questionCount: 6,
            icon: "📜",
            flashcards: [
                { front: "Türkiye Cumhuriyeti'nin devlet şekli nedir?", back: "Cumhuriyet (Anayasa md. 1)" },
                { front: "Devletin temel nitelikleri nelerdir?", back: "Demokratik, laik ve sosyal bir hukuk devleti (Anayasa md. 2)" },
                { front: "Egemenlik kime aittir?", back: "Egemenlik kayıtsız şartsız milletindir (Anayasa md. 6)" },
                { front: "Yasama yetkisi kime aittir?", back: "TBMM'ye aittir ve devredilemez (Anayasa md. 7)" },
                { front: "Yürütme yetkisi ve görevi kime aittir?", back: "Cumhurbaşkanına aittir (Anayasa md. 8)" },
                { front: "Yargı yetkisi kime aittir?", back: "Bağımsız ve tarafsız mahkemelere aittir (Anayasa md. 9)" },
                { front: "Bireysel başvuru nedir?", back: "Temel hak ve özgürlükleri ihlal edilenlerin Anayasa Mahkemesine başvuru hakkıdır." },
                { front: "TBMM üyeleri kimi temsil eder?", back: "Seçildikleri bölgeyi değil, bütün milleti temsil ederler." }
            ],
            questions: [
                { q: "Anayasa'nın 1. maddesine göre Türkiye Devleti'nin şekli nedir?", options: ["Monarşi", "Cumhuriyet", "Oligarşi", "Teokrasi"], answer: 1 },
                { q: "Egemenlik kayıtsız şartsız kime aittir?", options: ["TBMM'ye", "Cumhurbaşkanına", "Millete", "Hükümete"], answer: 2 },
                { q: "Yasama yetkisi kime aittir?", options: ["Cumhurbaşkanı", "TBMM", "Bakanlar Kurulu", "Anayasa Mahkemesi"], answer: 1 },
                { q: "Anayasa'ya göre yürütme yetkisi kime aittir?", options: ["TBMM", "Danıştay", "Cumhurbaşkanı", "Yargıtay"], answer: 2 },
                { q: "TBMM üyeleri Anayasa'ya göre kimi temsil eder?", options: ["Seçildikleri bölgeyi", "Kendilerini seçenleri", "Partilerini", "Bütün milleti"], answer: 3 },
                { q: "Bireysel başvuru hangi mahkemeye yapılır?", options: ["Yargıtay", "Danıştay", "Anayasa Mahkemesi", "Sayıştay"], answer: 2 }
            ]
        },
        {
            id: 12,
            name: "657 sayılı Devlet Memurları Kanunu",
            questionCount: 5,
            icon: "👨‍💼",
            flashcards: [
                { front: "Devlet memurlarının temel yükümlülükleri nelerdir?", back: "Anayasa ve kanunlara sadakat, tarafsızlık, devlete bağlılık, davranış ve işbirliği, mal bildiriminde bulunma." },
                { front: "Memurlara yasak olan faaliyetler nelerdir?", back: "Siyasi partiye üye olmak, grev yapmak, ticaret yapmak, hediye almak." },
                { front: "Disiplin cezaları nelerdir?", back: "Uyarma, kınama, aylıktan kesme, kademe ilerlemesinin durdurulması, devlet memurluğundan çıkarma." },
                { front: "Memuriyete giriş şartları nelerdir?", back: "TC vatandaşı olmak, 18 yaşını tamamlamak, öğrenim şartını taşımak, kamu haklarından mahrum olmamak, sağlık şartlarını taşımak." },
                { front: "Sicil affı nedir?", back: "Disiplin cezalarının belirli süre sonunda özlük dosyasından silinmesidir." }
            ],
            questions: [
                { q: "657 sayılı DMK'ya göre aşağıdakilerden hangisi disiplin cezalarından biri değildir?", options: ["Uyarma", "Kınama", "Para cezası", "Kademe ilerlemesinin durdurulması"], answer: 2 },
                { q: "Devlet memurlarının siyasi partilere üye olması durumu nedir?", options: ["Serbesttir", "Yasaktır", "İzne bağlıdır", "Bakanlığın onayına bağlıdır"], answer: 1 },
                { q: "Aşağıdakilerden hangisi Devlet memurluğuna giriş şartlarından biri değildir?", options: ["TC vatandaşı olmak", "18 yaşını tamamlamak", "Evli olmak", "Kamu haklarından mahrum olmamak"], answer: 2 },
                { q: "Devlet memurlarının ticaret yapması durumu nedir?", options: ["Serbesttir", "Yasaktır", "İzne bağlıdır", "Müdürün onayına bağlıdır"], answer: 1 },
                { q: "Devlet memurlarının grev yapması mümkün müdür?", options: ["Evet, serbesttir", "Hayır, yasaktır", "Sendika izniyle mümkündür", "Bakan onayıyla mümkündür"], answer: 1 }
            ]
        },
        {
            id: 13,
            name: "1739 sayılı Milli Eğitim Temel Kanunu",
            questionCount: 4,
            icon: "🎓",
            flashcards: [
                { front: "Türk milli eğitiminin temel ilkeleri nelerdir?", back: "Genellik ve eşitlik, ferdin ve toplumun ihtiyaçları, yöneltme, eğitim hakkı, fırsat ve imkân eşitliği, süreklilik, Atatürk inkılap ve ilkeleri ve Atatürk milliyetçiliği, demokrasi eğitimi, laiklik, bilimsellik, planlılık, karma eğitim, okul ile ailenin işbirliği, her yerde eğitim." },
                { front: "Örgün eğitim nedir?", back: "Okul öncesi, ilköğretim, ortaöğretim ve yükseköğretim kurumlarını kapsar." },
                { front: "Yaygın eğitim nedir?", back: "Örgün eğitim sistemine hiç girmemiş veya herhangi bir kademesinde bulunan ya da bu kademelerden birinden ayrılmış bireylere verilen eğitimdir." },
                { front: "Zorunlu eğitim kaç yıldır?", back: "12 yıl (4+4+4 sistemi)." }
            ],
            questions: [
                { q: "Türkiye'de zorunlu eğitim kaç yıldır?", options: ["8 yıl", "10 yıl", "12 yıl", "14 yıl"], answer: 2 },
                { q: "Aşağıdakilerden hangisi Türk milli eğitiminin temel ilkelerinden biri değildir?", options: ["Genellik ve eşitlik", "Laiklik", "Seçkincilik", "Bilimsellik"], answer: 2 },
                { q: "Örgün eğitim hangilerini kapsar?", options: ["Sadece ilköğretim", "Sadece ortaöğretim", "Okul öncesi, ilk, orta ve yükseköğretim", "Sadece yükseköğretim"], answer: 2 },
                { q: "Türk milli eğitiminin genel amaçları hangi kanunla belirlenmiştir?", options: ["657 sayılı Kanun", "1739 sayılı Kanun", "5018 sayılı Kanun", "4734 sayılı Kanun"], answer: 1 }
            ]
        },
        {
            id: 14,
            name: "İdari İşlemler ve Hukuk",
            questionCount: 4,
            icon: "⚖️",
            flashcards: [
                { front: "Yetki saptırması nedir?", back: "İdarenin yasama ya da yargı organının görev alanına giren bir konuda işlem tesis etmesidir." },
                { front: "İdari işlemin unsurları nelerdir?", back: "Yetki, şekil, sebep, konu ve amaç." },
                { front: "İdari işlemin geri alınması nedir?", back: "İdari işlemin bir başka idari işlem ile sona erdirilmesidir." },
                { front: "Yokluk yaptırımı nedir?", back: "Ağır yetki sakatlığı durumunda işlemin hiç yapılmamış sayılmasıdır." }
            ],
            questions: [
                { q: "İdari işlemlere ilişkin aşağıdakilerden hangisi yanlıştır?", options: ["Konu, idari işlem ile elde edilen sonuçtur", "Yetki sakatlıkları sonradan düzeltilebilir", "İdari işlemin geri alınması mümkündür", "Yokluk en ağır yaptırımdır"], answer: 1 },
                { q: "İdarenin yargı organının görev alanına girmesi durumu hangisidir?", options: ["Fonksiyon gaspı", "Yetki gaspı", "Yetki saptırması", "Konu sakatlığı"], answer: 0 },
                { q: "İdari işlemin iptal davası nerede açılır?", options: ["Adliye mahkemesi", "İdare mahkemesi", "Anayasa Mahkemesi", "Sayıştay"], answer: 1 },
                { q: "Kamu hizmeti usullerinden hangisinde sözleşme ile devir yapılamaz?", options: ["Müşterek emanet", "İltizam", "İmtiyaz", "Yalnız I ve II"], answer: 0 }
            ]
        },
        {
            id: 15,
            name: "4483 sayılı Memurlar Hakkında Kanun",
            questionCount: 3,
            icon: "⚖️",
            flashcards: [
                { front: "4483 sayılı Kanun neyi düzenler?", back: "Memurlar ve diğer kamu görevlilerinin görevleri sebebiyle işledikleri suçlardan dolayı yargılanmaları için izin vermeyi düzenler." },
                { front: "Soruşturma izni vermeye yetkili merciler kimlerdir?", back: "İlçede kaymakam, ilde vali, merkez teşkilatında ilgili bakan, Cumhurbaşkanlığında Cumhurbaşkanı." },
                { front: "Soruşturma izni süresi ne kadardır?", back: "Ön inceleme 30 gün içinde tamamlanır, zorunlu hallerde 15 gün uzatılabilir." }
            ],
            questions: [
                { q: "İlde görevli memurlar için soruşturma izni vermeye kim yetkilidir?", options: ["Kaymakam", "Vali", "Bakan", "Müsteşar"], answer: 1 },
                { q: "4483 sayılı Kanuna göre ön inceleme kaç gün içinde tamamlanır?", options: ["15 gün", "30 gün", "45 gün", "60 gün"], answer: 1 },
                { q: "İlçede görevli memurlar için soruşturma izni kim verir?", options: ["Vali", "Kaymakam", "Bakan", "Cumhurbaşkanı"], answer: 1 }
            ]
        },
        {
            id: 16,
            name: "5018 sayılı Kamu Mali Yönetimi Kanunu",
            questionCount: 4,
            icon: "💰",
            flashcards: [
                { front: "5018 sayılı Kanun neyi düzenler?", back: "Kamu mali yönetimi ve kontrol sistemini düzenler." },
                { front: "Harcama yetkilisi kimdir?", back: "Bütçeyle ödenek tahsis edilen her bir harcama biriminin en üst yöneticisidir." },
                { front: "Gerçekleştirme görevlisi kimdir?", back: "Harcama talimatı üzerine, işin yapılmasını sağlayan, mal/hizmet alımını gerçekleştiren kişidir." },
                { front: "İç kontrol nedir?", back: "İdarenin amaçlarına, belirlenen politikalara ve mevzuata uygun olarak faaliyetlerin yürütülmesini sağlayan süreçtir." },
                { front: "Üst yönetici kimdir?", back: "Bakanlıklarda müsteşar, diğer kamu idarelerinde en üst yöneticidir." }
            ],
            questions: [
                { q: "Bütçeyle ödenek tahsis edilen harcama biriminin en üst yöneticisi kimdir?", options: ["Muhasebe yetkilisi", "Gerçekleştirme görevlisi", "Harcama yetkilisi", "Üst yönetici"], answer: 2 },
                { q: "5018 sayılı Kanuna göre iç denetçiler kime bağlıdır?", options: ["Harcama yetkilisine", "Üst yöneticiye", "Bakana", "Maliye Bakanlığına"], answer: 1 },
                { q: "Kamu idarelerinde mali işlemlerin muhasebeleştirilmesinden kim sorumludur?", options: ["Harcama yetkilisi", "Muhasebe yetkilisi", "Üst yönetici", "Denetçi"], answer: 1 },
                { q: "Aşağıdakilerden hangisi 5018 sayılı Kanunun temel ilkelerinden değildir?", options: ["Hesap verebilirlik", "Mali saydamlık", "Gizlilik", "Etkinlik"], answer: 2 }
            ]
        },
        {
            id: 17,
            name: "4734 sayılı Kamu İhale Kanunu",
            questionCount: 4,
            icon: "📊",
            flashcards: [
                { front: "4734 sayılı Kanun neyi düzenler?", back: "Kamu kurum ve kuruluşlarının mal veya hizmet alımları ile yapım işlerinin ihalelerini düzenler." },
                { front: "Temel ilkeleri nelerdir?", back: "Saydamlık, rekabet, eşit muamele, güvenirlik, kamuoyu denetimi, ihtiyaçların uygun şartlarla ve zamanında karşılanması, kaynakların verimli kullanılması." },
                { front: "İhale usulleri nelerdir?", back: "Açık ihale, belli istekliler arasında ihale, pazarlık usulü, doğrudan temin." },
                { front: "Eşik değer nedir?", back: "Ulusal ve uluslararası ihaleleri ayıran parasal sınırdır." }
            ],
            questions: [
                { q: "4734 sayılı Kanunun temel ilkelerinden hangisi değildir?", options: ["Saydamlık", "Rekabet", "Gizlilik", "Eşit muamele"], answer: 2 },
                { q: "4734 sayılı Kanuna göre aşağıdakilerden hangisi ihale usullerinden değildir?", options: ["Açık ihale", "Pazarlık usulü", "Kapalı teklif usulü", "Doğrudan temin"], answer: 2 },
                { q: "Kamu ihaleleri için temel usul hangisidir?", options: ["Pazarlık usulü", "Açık ihale", "Doğrudan temin", "Belli istekliler arasında"], answer: 1 },
                { q: "Aşağıdakilerden hangisi 2886 sayılı Kanundaki ihale usullerinden değildir?", options: ["Kapalı teklif", "Açık teklif", "Doğrudan temin", "Pazarlık"], answer: 2 }
            ]
        },
        {
            id: 18,
            name: "4735 sayılı Kamu İhale Sözleşmeleri Kanunu",
            questionCount: 3,
            icon: "📝",
            flashcards: [
                { front: "4735 sayılı Kanun neyi düzenler?", back: "4734 sayılı Kanun kapsamında yapılan ihalelere ilişkin sözleşmelerin düzenlenmesi ve uygulanmasını düzenler." },
                { front: "Sözleşme türleri nelerdir?", back: "Anahtar teslimi götürü bedel, birim fiyat, karma (götürü bedel + birim fiyat)." },
                { front: "Yüklenicinin yasak fiilleri nelerdir?", back: "Sözleşmeyi devretmek, alt yüklenici sınırını aşmak, hile yapmak." },
                { front: "Mücbir sebepler nelerdir?", back: "Doğal afetler, salgın hastalıklar, savaş, genel grev." }
            ],
            questions: [
                { q: "4735 sayılı Kanuna göre aşağıdakilerden hangisi sözleşme türlerinden biri değildir?", options: ["Götürü bedel", "Birim fiyat", "Açık artırma", "Karma"], answer: 2 },
                { q: "Aşağıdakilerden hangisi mücbir sebeplerden biri değildir?", options: ["Doğal afet", "Salgın hastalık", "Ekonomik kriz", "Genel grev"], answer: 2 },
                { q: "Yüklenicinin sözleşmeyi devretmesi durumu nedir?", options: ["Serbesttir", "İzne bağlıdır", "Yasaktır", "Belirli şartlarda yapılabilir"], answer: 2 }
            ]
        },
        {
            id: 19,
            name: "5442 sayılı İl İdaresi Kanunu",
            questionCount: 4,
            icon: "🗺️",
            flashcards: [
                { front: "İl idaresinin başı kimdir?", back: "Vali, ilin genel idaresinin başıdır." },
                { front: "Kaymakamın görevleri nelerdir?", back: "İlçede genel idare kuruluşlarını denetlemek, halkın huzur ve rahatını sağlamak, kanun ve kararnameleri uygulamak." },
                { front: "Valiler nasıl atanır?", back: "Cumhurbaşkanı kararı (ortak kararname) ile atanır." },
                { front: "Kaymakamlar nasıl atanır?", back: "İçişleri Bakanlığı tarafından atanır." }
            ],
            questions: [
                { q: "5442 sayılı Kanuna göre ilin genel idaresinin başı kimdir?", options: ["Belediye Başkanı", "Kaymakam", "Vali", "İl Genel Meclisi Başkanı"], answer: 2 },
                { q: "Valiler nasıl atanır?", options: ["Bakanlık onayı ile", "Ortak kararname ile", "TBMM kararı ile", "Cumhurbaşkanlığı kararnamesi ile"], answer: 1 },
                { q: "Kaymakamları kim atar?", options: ["Cumhurbaşkanı", "Vali", "İçişleri Bakanı", "TBMM"], answer: 2 },
                { q: "Aşağıdakilerden hangisi valinin görevlerinden değildir?", options: ["İl güvenliğini sağlamak", "Vergi toplamak", "Genel emir vermek", "Kanunların uygulanmasını sağlamak"], answer: 1 }
            ]
        },
        {
            id: 20,
            name: "4688 sayılı Kamu Görevlileri Sendikaları Kanunu",
            questionCount: 3,
            icon: "✊",
            flashcards: [
                { front: "Kamu görevlileri sendikaya üye olabilir mi?", back: "Evet, 4688 sayılı Kanun kapsamında kamu görevlileri sendika ve konfederasyon kurabilir, bunlara üye olabilirler." },
                { front: "Sendika kurma şartları nelerdir?", back: "En az 7 kamu görevlisi bir araya gelerek sendika kurabilir." },
                { front: "Toplu sözleşme nedir?", back: "Kamu görevlilerinin mali ve sosyal haklarını belirleyen, yetkili sendika ile kamu işveren heyeti arasında imzalanan sözleşmedir." }
            ],
            questions: [
                { q: "Sendika kurmak için en az kaç kamu görevlisi gerekir?", options: ["3", "5", "7", "10"], answer: 2 },
                { q: "Kamu görevlileri grev yapabilir mi?", options: ["Evet", "Hayır", "Bakanlık izniyle", "Sendika kararıyla"], answer: 1 },
                { q: "Toplu sözleşme taraflarından biri hangisidir?", options: ["TBMM", "Yetkili sendika", "Vali", "Kaymakam"], answer: 1 }
            ]
        },
        {
            id: 21,
            name: "652 sayılı MEB Teşkilat ve Görevleri",
            questionCount: 3,
            icon: "🏢",
            flashcards: [
                { front: "MEB'in görevi nedir?", back: "Millî eğitim hizmetlerini planlamak, yürütmek ve denetlemek." },
                { front: "Talim ve Terbiye Kurulu'nun görevi nedir?", back: "Eğitim-öğretim programlarını hazırlamak ve geliştirmek, ders kitaplarını incelemek ve onaylamak." },
                { front: "MEB taşra teşkilatı hangi birimlerden oluşur?", back: "İl ve ilçe milli eğitim müdürlükleri." }
            ],
            questions: [
                { q: "Talim ve Terbiye Kurulu'nun temel görevi nedir?", options: ["Personel atamak", "Bütçe hazırlamak", "Eğitim programlarını hazırlamak", "Bina yapmak"], answer: 2 },
                { q: "MEB taşra teşkilatı hangi birimlerden oluşur?", options: ["Sadece il müdürlükleri", "İl ve ilçe müdürlükleri", "Sadece okullar", "Genel müdürlükler"], answer: 1 },
                { q: "MEB merkez teşkilatındaki danışma birimi hangisidir?", options: ["Personel GM", "Talim ve Terbiye Kurulu", "Strateji Geliştirme Başkanlığı", "Teftiş Kurulu"], answer: 1 }
            ]
        },
        {
            id: 22,
            name: "5580 sayılı Özel Öğretim Kurumları Kanunu",
            questionCount: 3,
            icon: "🎒",
            flashcards: [
                { front: "Özel öğretim kurumları kimler tarafından açılabilir?", back: "Türkiye Cumhuriyeti uyruklu gerçek kişiler, özel hukuk tüzel kişileri." },
                { front: "Kurum açma izni kim tarafından verilir?", back: "Milli Eğitim Bakanlığı tarafından verilir." },
                { front: "Özel öğretim kurumlarının türleri nelerdir?", back: "Özel okullar, kurslar, özel eğitim ve rehabilitasyon merkezleri." }
            ],
            questions: [
                { q: "Özel öğretim kurumu açma izni kim tarafından verilir?", options: ["Valilik", "Milli Eğitim Bakanlığı", "Cumhurbaşkanlığı", "TBMM"], answer: 1 },
                { q: "Özel öğretim kurumlarının denetimi kim tarafından yapılır?", options: ["Maliye Bakanlığı", "Milli Eğitim Bakanlığı", "İçişleri Bakanlığı", "Bağımsız denetçiler"], answer: 1 },
                { q: "Aşağıdakilerden hangisi özel öğretim kurumu türlerinden değildir?", options: ["Özel okul", "Kurs", "Devlet üniversitesi", "Özel eğitim merkezi"], answer: 2 }
            ]
        },
        {
            id: 23,
            name: "222 sayılı İlköğretim ve Eğitim Kanunu",
            questionCount: 3,
            icon: "🏫",
            flashcards: [
                { front: "Mecburi ilköğretim çağı kaç yaştır?", back: "6-13 yaş arası" },
                { front: "İlköğretim zorunlu mudur?", back: "Evet, mecburi ilköğretim çağındaki her çocuk ilköğretime devam etmek zorundadır." },
                { front: "İlköğretim okullarının finansmanı nasıl sağlanır?", back: "Devlet, il özel idaresi ve belediyeler tarafından sağlanır." }
            ],
            questions: [
                { q: "222 sayılı Kanuna göre mecburi ilköğretim çağı kaç yaş arasıdır?", options: ["5-12", "6-13", "7-14", "6-14"], answer: 1 },
                { q: "İlköğretim okullarının yapım giderlerine kim katılır?", options: ["Sadece devlet", "Sadece belediye", "Devlet ve il özel idaresi", "Özel sektör"], answer: 2 },
                { q: "222 sayılı Kanun neyi düzenler?", options: ["Yükseköğretim", "İlköğretim ve eğitim", "Mesleki eğitim", "Özel öğretim"], answer: 1 }
            ]
        }
    ]
};

// İlerleme takibi için veri yapısı
const initialProgress = {
    flashcardsStudied: {},
    quizResults: {},
    totalStudyTime: 0,
    lastStudyDate: null,
    dailyStreak: 0
};

// LocalStorage'dan ilerleme yükle veya başlangıç değerlerini kullan
function loadProgress() {
    const saved = localStorage.getItem('subeExamProgress');
    return saved ? JSON.parse(saved) : initialProgress;
}

// İlerlemeyi kaydet
function saveProgress(progress) {
    localStorage.setItem('subeExamProgress', JSON.stringify(progress));
}

// Dışa aktar
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { examData, loadProgress, saveProgress };
}
