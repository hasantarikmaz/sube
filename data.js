// Şube Müdürlüğü Sınav Hazırlık - Veri Dosyası
// Gerçek sınav sorularından esinlenerek hazırlanmış ZOR soru bankası
// Soru dağılımı: MEB Görevde Yükselme Sınavı resmi dağılımına göre (Toplam 60 soru)

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
                { front: "Devrik cümle nedir?", back: "Yüklemi sonda olmayan cümlelerdir." },
                { front: "Kurallı cümle nedir?", back: "Yüklemi sonda olan cümlelerdir." },
                { front: "Belirtili isim tamlaması nedir?", back: "Hem tamlayanın hem tamlananın ek aldığı tamlamadır. Örn: Annemin arabası" },
                { front: "Belirtisiz isim tamlaması nedir?", back: "Sadece tamlananın ek aldığı tamlamadır. Örn: Okul bahçesi" },
                { front: "Zarf tümleci nedir?", back: "Yüklemi zaman, yer-yön, durum, miktar bakımından belirleyen öğedir." }
            ],
            questions: [
                { q: "Aşağıdaki cümlelerin hangisinde özne-yüklem uyumsuzluğu vardır?", options: ["Öğrenciler sınava hazırlanıyor.", "Çocuklar parkta oynuyorlar.", "Herkes bu durumdan memnun.", "Kuşlar gökyüzünde uçuyor."], answer: 1 },
                { q: "'Dün akşam eve geç geldim.' cümlesinde 'dün akşam' sözü cümlenin hangi öğesidir?", options: ["Özne", "Nesne", "Zarf tümleci", "Dolaylı tümleç"], answer: 2 },
                { q: "Aşağıdaki cümlelerin hangisinde belirtili isim tamlaması kullanılmıştır?", options: ["Kapı kolu kırıldı.", "Okul bahçesi temizlendi.", "Annemin arabası bozuldu.", "Çocuk kitabı aldım."], answer: 2 },
                { q: "'Ne söylediğini anlamadım.' cümlesinde altı çizili söz grubu cümlenin hangi öğesidir?", options: ["Özne", "Nesne", "Zarf tümleci", "Dolaylı tümleç"], answer: 1 },
                { q: "Aşağıdaki cümlelerin hangisi kurallı (düz) cümledir?", options: ["Güzel bir gündü bugün.", "Yarın gelecekmiş arkadaşım.", "Öğrenciler derse çalıştı.", "Çok yorgundu herkes."], answer: 2 }
            ]
        },
        {
            id: 2,
            name: "Yönetimde İnsan İlişkileri ve İletişim",
            questionCount: 2,
            icon: "🤝",
            flashcards: [
                { front: "Kariyer platosu (sürdürme) aşaması nedir?", back: "Bireyin gelişiminin sınırlarına erişip, yeni kazançlar yerine mevcut kazançları korumaya yöneldiği, saygınlık ihtiyacının öne çıktığı aşamadır." },
                { front: "Hawthorne araştırmaları neyi ortaya koydu?", back: "İş veriminin fiziksel koşullardan çok sosyal faktörlerden etkilendiğini ortaya koymuştur." },
                { front: "Kariyer aşamaları nelerdir?", back: "Meslek seçimi, oluşum, gelişme, sürdürme ve çekilme." }
            ],
            questions: [
                { q: "Bireyin gelişiminin sınırlarına erişip, yaptığı işte yoğunlaştığı, var olan kazançlarını korumaya yöneldiği ve yaratıcılığını devam ettirebildiği, saygınlık ihtiyacının öne çıktığı kariyer aşaması aşağıdakilerden hangisidir?", options: ["Çekilme", "Oluşum", "Gelişme", "Sürdürme"], answer: 3 },
                { q: "Örgütsel iletişimde 'asma çubuğu (grapevine)' kavramı aşağıdakilerden hangisini ifade eder?", options: ["Resmi yazışmalar", "İnformal dedikodu ağı", "Dikey iletişim", "Yatay iletişim"], answer: 1 }
            ]
        },
        {
            id: 3,
            name: "Yönetim, Liderlik ve Organizasyon",
            questionCount: 3,
            icon: "👔",
            flashcards: [
                { front: "Yönetimin temel fonksiyonları nelerdir?", back: "Planlama, örgütleme, yöneltme ve denetim." },
                { front: "Otoriter liderlik nedir?", back: "Karar verme yetkisinin tamamen liderde olduğu liderlik tarzıdır." },
                { front: "Demokratik liderlik nedir?", back: "Karar alma sürecinde astların görüşlerinin alındığı liderlik tarzıdır." }
            ],
            questions: [
                { q: "Aşağıdakilerden hangisi yönetimin temel fonksiyonlarından biri değildir?", options: ["Planlama", "Örgütleme", "Pazarlama", "Denetim"], answer: 2 },
                { q: "SWOT analizinde iç çevre faktörlerini gösteren bileşenler aşağıdakilerden hangisidir?", options: ["Fırsatlar - Tehditler", "Güçlü yönler - Zayıf yönler", "Güçlü yönler - Fırsatlar", "Zayıf yönler - Tehditler"], answer: 1 },
                { q: "Henry Fayol'un yönetim ilkelerinden 'komuta birliği' ilkesi aşağıdakilerden hangisini ifade eder?", options: ["Her işin bir uzman tarafından yapılması", "Her astın yalnızca bir üstten emir alması", "Yetki ve sorumluluğun denk olması", "Örgüt çıkarlarının kişisel çıkarların önünde tutulması"], answer: 1 }
            ]
        },
        {
            id: 4,
            name: "İnsan Hakları ve Demokrasi",
            questionCount: 1,
            icon: "⚖️",
            flashcards: [
                { front: "İnsan Hakları Evrensel Beyannamesi ne zaman kabul edildi?", back: "10 Aralık 1948" },
                { front: "Kuvvetler ayrılığı ilkesini ilk ortaya atan düşünür kimdir?", back: "Montesquieu" }
            ],
            questions: [
                { q: "Birleşmiş Milletler İnsan Hakları Evrensel Beyannamesi hangi tarihte kabul edilmiştir?", options: ["10 Aralık 1945", "10 Aralık 1948", "10 Aralık 1950", "10 Aralık 1953"], answer: 1 }
            ]
        },
        {
            id: 5,
            name: "Yönetimde Etik",
            questionCount: 1,
            icon: "🎯",
            flashcards: [
                { front: "Kamu görevlilerinin uyması gereken etik ilkeler nelerdir?", back: "Dürüstlük, tarafsızlık, saydamlık, hesap verebilirlik, kamu yararını gözetme." },
                { front: "Çıkar çatışması nedir?", back: "Kamu görevlisinin kişisel çıkarları ile görevinin gerektirdiği sorumlulukların çelişmesi durumudur." }
            ],
            questions: [
                { q: "Aşağıdakilerden hangisi bir okul yöneticisinin etik dışı davranışlardan kaçınmak için uyması gereken ilkelerden değildir?", options: ["Ayrımcılığın ortadan kaldırılması", "Etik mevzuatına uygun hareket edilmesi", "Bütün grupların hakları arasında denge kurulması", "Herkes tarafından istenen kararın her zaman doğru kabul edilmesi"], answer: 3 }
            ]
        },
        {
            id: 6,
            name: "Türk İdare Sistemi",
            questionCount: 1,
            icon: "🏛️",
            flashcards: [
                { front: "Merkezi idare nedir?", back: "Başkent örgütü ve taşra örgütünden oluşan devletin temel idari yapısıdır." },
                { front: "İdari vesayet nedir?", back: "Merkezi idarenin mahalli idareler üzerindeki denetim yetkisidir." }
            ],
            questions: [
                { q: "Aşağıdakilerden hangisi kamu hizmetinin görülmesinde özel hukuk kişisine sözleşme ile devredilemeyen usullerdendir?", options: ["Müşterek emanet usulü", "Ruhsat usulü", "İltizam usulü", "İmtiyaz usulü"], answer: 0 }
            ]
        },
        {
            id: 7,
            name: "Protokol Kuralları",
            questionCount: 1,
            icon: "🎩",
            flashcards: [
                { front: "Hediye alma kuralı nedir?", back: "Aylık asgari ücretin on katını aşmayan hediyeler kuruma beyan edilir." },
                { front: "Oturma düzeni kuralı nedir?", back: "En kıdemli kişi sağ tarafta oturur." }
            ],
            questions: [
                { q: "Protokol kurallarına göre, hediye alma ve sunma ile ilgili aşağıdakilerden hangisi yanlıştır?", options: ["Hediye gönderene mektupla veya telefonla teşekkür edilmelidir", "Uluslararası ilişkilerde parasal değeri aylık asgari ücretin on katının altında olan hediyeler kuruma beyan edilmelidir", "Hediyeler makamda yapılan resmî ziyaret sonunda takdim edilebilir", "Konut dışında otelde, restoranda verilen resepsiyon ve yemek davetlerine hediye gönderilir"], answer: 3 }
            ]
        },
        {
            id: 8,
            name: "Atatürk İlkeleri ve İnkılap Tarihi",
            questionCount: 2,
            icon: "🇹🇷",
            flashcards: [
                { front: "Atatürk ilkeleri nelerdir?", back: "Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik, İnkılapçılık." },
                { front: "Serbest Cumhuriyet Fırkası ne zaman kuruldu?", back: "12 Ağustos 1930" },
                { front: "Serbest Cumhuriyet Fırkası'nın kurucusu kimdir?", back: "Fethi Okyar" }
            ],
            questions: [
                { q: "Aşağıdakilerden hangisi Serbest Cumhuriyet Fırkasının kurucularındandır?", options: ["Fuat Köprülü", "Fethi Okyar", "Adnan Adıvar", "Rauf Orbay"], answer: 1 },
                { q: "Aşağıdakilerden hangisi I. Dünya Savaşı sırasında İtilaf Devletleri'nin lehine etki eden gelişmelerdendir?", options: ["Rusya'da Bolşevik İhtilali'nin çıkması", "Bulgaristan'ın savaşa katılması", "ABD'nin Almanya'ya savaş açması", "Osmanlı Devleti'nin Çanakkale Cephesi'nde başarılı olması"], answer: 2 }
            ]
        },
        {
            id: 9,
            name: "Genel Kültür",
            questionCount: 5,
            icon: "🌍",
            flashcards: [
                { front: "Uluslararası Çalışma Örgütü (ILO) hangi antlaşma ile kuruldu?", back: "Versay Antlaşması (1919)" },
                { front: "Pulitzer Ödülü nedir?", back: "Columbia Üniversitesi tarafından gazetecilik, edebiyat ve müzik alanlarında verilen ödüldür." },
                { front: "Yahya Kemal Beyatlı'nın eserleri nelerdir?", back: "Kendi Gök Kubbemiz, Eğil Dağlar, Aziz İstanbul" }
            ],
            questions: [
                { q: "Uluslararası Çalışma Teşkilatı (ILO) aşağıdaki antlaşmalardan hangisi ile kurulmuştur?", options: ["Paris Antlaşması", "Cenevre Antlaşması", "Versay Antlaşması", "Lizbon Antlaşması"], answer: 2 },
                { q: "Türk edebiyatında aruzu Türkçe'ye başarıyla uygulayan, 'Kendi Gök Kubbemiz, Eğil Dağlar, Aziz İstanbul' adlı eserlerin yazarı kimdir?", options: ["Fazıl Hüsnü Dağlarca", "Mehmet Âkif Ersoy", "Ahmet Haşim", "Yahya Kemal Beyatlı"], answer: 3 },
                { q: "New York'ta bulunan Columbia Üniversitesi tarafından gazetecilik, edebiyat ve müzik alanlarında verilen ödül aşağıdakilerden hangisidir?", options: ["Pulitzer", "Oscar", "Emmy", "Ramon Magsaysay"], answer: 0 },
                { q: "Aşağıdakilerden hangisi Türk Devletleri Teşkilatında gözlemci statüsünde yer alan ülkelerdendir?", options: ["Kazakistan", "Kırgızistan", "Macaristan", "Türkmenistan"], answer: 2 },
                { q: "Aşağıdaki tarihi yapılardan hangisi Güneydoğu Anadolu bölgesindedir?", options: ["Akdamar Kilisesi", "Mor Gabriel Manastırı", "İnce Minareli Medrese", "Ani Harabeleri"], answer: 1 }
            ]
        },
        {
            id: 10,
            name: "T.C. Anayasası",
            questionCount: 4,
            icon: "📜",
            flashcards: [
                { front: "TBMM üyeleri kimi temsil eder?", back: "Seçildikleri bölgeyi değil, bütün milleti temsil ederler." },
                { front: "Bireysel başvuru nedir?", back: "Temel hak ve özgürlükleri ihlal edilenlerin Anayasa Mahkemesine başvuru hakkıdır." },
                { front: "Cumhurbaşkanlığı için aday gösterme şartları nelerdir?", back: "Siyasi parti grupları veya son seçimde %5 oy alan partiler veya 100.000 seçmen aday gösterebilir." }
            ],
            questions: [
                { q: "T.C. Anayasası'na göre, TBMM üyeleri aşağıdakilerden hangisini temsil eder?", options: ["Seçildikleri bölgeyi", "Kendilerini seçenleri", "Siyasi partilerini", "Bütün milleti"], answer: 3 },
                { q: "T.C. Anayasası'na göre, bireysel başvuru ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["Herkes tüm konularda Anayasa Mahkemesine başvurabilir", "Herkes Anayasada güvence altına alınmış temel hak ve özgürlüklerinden AİHS kapsamındaki herhangi birinin ihlali iddiasıyla Anayasa Mahkemesine başvurabilir", "Bireysel başvuru Danıştay'a yapılır", "Bireysel başvuru hakkı yalnızca Türk vatandaşlarına tanınmıştır"], answer: 1 },
                { q: "T.C. Anayasası'na göre, aşağıdakilerden hangisi Cumhurbaşkanlığı için aday gösteremez?", options: ["Siyasi parti grupları", "TBMM üye tam sayısının beşte biri tutarında milletvekili", "Son genel seçimde toplam geçerli oyların yüzde beşini alan siyasi parti", "Yüz bin seçmen"], answer: 1 },
                { q: "T.C. Anayasası'na göre, 'kişinin hakları ve ödevleri' içerisinde aşağıdakilerden hangisi sayılmıştır?", options: ["Toplantı ve gösteri yürüyüşü düzenleme hakkı", "Grev hakkı ve lokavt", "Türk vatandaşlığı", "Sendika kurma hakkı"], answer: 2 }
            ]
        },
        {
            id: 11,
            name: "657 sayılı Devlet Memurları Kanunu",
            questionCount: 4,
            icon: "👨‍💼",
            flashcards: [
                { front: "Kademe ilerlemesinin durdurulması cezası kaç yıl süreyle verilir?", back: "Fiilin ağırlık derecesine göre 1-3 yıl." },
                { front: "Disiplin cezalarına itiraz süresi kaç gündür?", back: "Kararın tebliğinden itibaren 7 gün." },
                { front: "Kesintisiz kaç gün göreve gelmezse memur çekilmiş sayılır?", back: "10 gün." }
            ],
            questions: [
                { q: "657 sayılı DMK'ya göre, kademe ilerlemesinin durdurulması cezası fiilin ağırlık derecesine göre en fazla kaç yıl süreyle verilir?", options: ["1 yıl", "2 yıl", "3 yıl", "5 yıl"], answer: 2 },
                { q: "657 sayılı DMK'ya göre, aşağıdaki fiillerden hangisi 'aylıktan kesme' cezasını gerektirir?", options: ["Verilen emirlere itiraz etmek", "Göreve sarhoş gelmek", "Özürsüz olarak bir veya iki gün göreve gelmemek", "Amire saygısızlık etmek"], answer: 2 },
                { q: "657 sayılı DMK'ya göre, Devlet memurluğundan çıkarma cezası aşağıdakilerden hangisi tarafından verilir?", options: ["Disiplin amiri", "Atamaya yetkili amir", "Disiplin kurulu", "Yüksek disiplin kurulu"], answer: 3 },
                { q: "657 sayılı DMK'ya göre, disiplin cezalarına karşı itiraz süresi kararın tebliğinden itibaren kaç gündür?", options: ["3 gün", "5 gün", "7 gün", "10 gün"], answer: 2 }
            ]
        },
        {
            id: 12,
            name: "1739 sayılı Milli Eğitim Temel Kanunu",
            questionCount: 4,
            icon: "🎓",
            flashcards: [
                { front: "Zorunlu eğitim kaç yıldır?", back: "12 yıl (4+4+4)." },
                { front: "Örgün eğitim hangi kademeleri kapsar?", back: "Okul öncesi, ilköğretim, ortaöğretim ve yükseköğretim." },
                { front: "Ortaöğretim süresi kaç yıldır?", back: "4 yıl." }
            ],
            questions: [
                { q: "1739 sayılı Kanuna göre, aşağıdakilerden hangisi Türk milli eğitiminin temel ilkelerinden biri değildir?", options: ["Genellik ve eşitlik", "Laiklik", "Seçkincilik", "Bilimsellik"], answer: 2 },
                { q: "1739 sayılı Kanuna göre, ortaöğretimin süresi kaç yıldır?", options: ["3 yıl", "4 yıl", "5 yıl", "6 yıl"], answer: 1 },
                { q: "1739 sayılı Kanuna göre, ilköğretim kaç yaşını bitiren çocukların zorunlu olarak devam edeceği okuldur?", options: ["5 yaşını bitiren", "6 yaşını bitiren", "7 yaşını bitiren", "5-6 yaş grubundaki"], answer: 0 },
                { q: "1739 sayılı Kanuna göre, örgün ve yaygın eğitim kurumlarının denetimi ile ilgili aşağıdakilerden hangisi yanlıştır?", options: ["Eğitim kurumları Milli Eğitim Bakanlığınca denetlenir", "Özel öğretim kurumları denetlenemez", "Denetim mevzuata göre yapılır", "Denetim raporları ilgili birimlere gönderilir"], answer: 1 }
            ]
        },
        {
            id: 13,
            name: "222 sayılı İlköğretim ve Eğitim Kanunu",
            questionCount: 4,
            icon: "🏫",
            flashcards: [
                { front: "Mecburi ilköğretim çağı kaç yaştır?", back: "6-13 yaş arası (5 yaşını dolduran, 13 yaşını bitiren)." },
                { front: "İlköğretim okullarının yapım giderleri kim tarafından karşılanır?", back: "Devlet ve il özel idaresi." }
            ],
            questions: [
                { q: "222 sayılı Kanuna göre, mecburi ilköğretim çağı hangi yaş aralığını kapsar?", options: ["5-12 yaş", "6-13 yaş", "7-14 yaş", "6-14 yaş"], answer: 1 },
                { q: "222 sayılı Kanuna göre, ilköğretim okullarının yapım giderlerine aşağıdakilerden hangisi katılmaz?", options: ["Devlet bütçesi", "İl özel idaresi", "Belediyeler", "Özel sektör kuruluşları"], answer: 3 },
                { q: "222 sayılı Kanuna göre, köy okullarının öğretmen lojmanları kimin tarafından yaptırılır?", options: ["Milli Eğitim Bakanlığı", "Köy tüzel kişiliği", "İl özel idaresi", "Valilik"], answer: 2 },
                { q: "222 sayılı Kanuna göre, okul aile birliklerinin gelirleri aşağıdakilerden hangisine harcanamaz?", options: ["Eğitim ve öğretim hizmetleri", "Öğrenci bursları", "Personel maaşları", "Sosyal ve kültürel faaliyetler"], answer: 2 }
            ]
        },
        {
            id: 14,
            name: "652 sayılı MEB Teşkilat ve Görevleri KHK",
            questionCount: 4,
            icon: "🏢",
            flashcards: [
                { front: "Talim ve Terbiye Kurulu'nun görevi nedir?", back: "Eğitim-öğretim programlarını hazırlamak ve geliştirmek, ders kitaplarını incelemek ve onaylamak." },
                { front: "MEB taşra teşkilatı hangi birimlerden oluşur?", back: "İl ve ilçe milli eğitim müdürlükleri." }
            ],
            questions: [
                { q: "652 sayılı KHK'ya göre, Talim ve Terbiye Kurulu'nun temel görevi aşağıdakilerden hangisidir?", options: ["Personel atamak", "Bütçe hazırlamak", "Eğitim-öğretim programlarını hazırlamak ve geliştirmek", "Okul binalarını yapmak"], answer: 2 },
                { q: "652 sayılı KHK'ya göre, MEB'in danışma ve denetim birimi aşağıdakilerden hangisidir?", options: ["Personel Genel Müdürlüğü", "Talim ve Terbiye Kurulu Başkanlığı", "Strateji Geliştirme Başkanlığı", "Teftiş Kurulu Başkanlığı"], answer: 3 },
                { q: "652 sayılı KHK'ya göre, il milli eğitim müdürleri aşağıdakilerden hangisi tarafından atanır?", options: ["Vali", "Milli Eğitim Bakanı", "Cumhurbaşkanı", "Müsteşar"], answer: 1 },
                { q: "652 sayılı KHK'ya göre, aşağıdakilerden hangisi MEB merkez teşkilatı hizmet birimlerinden biri değildir?", options: ["Temel Eğitim Genel Müdürlüğü", "Ortaöğretim Genel Müdürlüğü", "İlçe Milli Eğitim Müdürlüğü", "Özel Eğitim ve Rehberlik Hizmetleri Genel Müdürlüğü"], answer: 2 }
            ]
        },
        {
            id: 15,
            name: "4483 sayılı Memurlar Hakkında Soruşturma Kanunu",
            questionCount: 2,
            icon: "⚖️",
            flashcards: [
                { front: "Ön inceleme süresi ne kadardır?", back: "30 gün, zorunlu hallerde 15 gün uzatılabilir." },
                { front: "Soruşturma izni kararına itiraz süresi kaç gündür?", back: "10 gün." }
            ],
            questions: [
                { q: "4483 sayılı Kanuna göre, ön inceleme en geç kaç gün içinde tamamlanır?", options: ["15 gün", "30 gün", "45 gün", "60 gün"], answer: 1 },
                { q: "4483 sayılı Kanuna göre, soruşturma izni verilmesine veya verilmemesine ilişkin karara itiraz süresi kararın tebliğinden itibaren kaç gündür?", options: ["5 gün", "7 gün", "10 gün", "15 gün"], answer: 2 }
            ]
        },
        {
            id: 16,
            name: "5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu",
            questionCount: 2,
            icon: "💰",
            flashcards: [
                { front: "Harcama yetkilisi kimdir?", back: "Bütçeyle ödenek tahsis edilen harcama biriminin en üst yöneticisidir." },
                { front: "Stratejik plan kaç yıllık hazırlanır?", back: "En az 5 yıl." }
            ],
            questions: [
                { q: "5018 sayılı Kanuna göre, bütçeyle ödenek tahsis edilen harcama biriminin en üst yöneticisi aşağıdakilerden hangisidir?", options: ["Muhasebe yetkilisi", "Gerçekleştirme görevlisi", "Harcama yetkilisi", "Üst yönetici"], answer: 2 },
                { q: "5018 sayılı Kanuna göre, iç denetçiler görevlerinde aşağıdakilerden hangisine bağlıdır?", options: ["Maliye Bakanlığı", "Sayıştay", "Üst yönetici", "Harcama yetkilisi"], answer: 2 }
            ]
        },
        {
            id: 17,
            name: "2886 sayılı Devlet İhale Kanunu",
            questionCount: 2,
            icon: "📋",
            flashcards: [
                { front: "Geçici teminat oranı ne kadardır?", back: "Tahmin edilen bedelin %3'ü." },
                { front: "İhale usulleri nelerdir?", back: "Kapalı teklif, belli istekliler arasında kapalı teklif, açık teklif, pazarlık, yarışma." }
            ],
            questions: [
                { q: "2886 sayılı Kanuna göre, geçici teminat oranı tahmin edilen bedelin yüzde kaçıdır?", options: ["%1", "%3", "%5", "%10"], answer: 1 },
                { q: "2886 sayılı Kanuna göre, aşağıdakilerden hangisi ihale usullerinden biri değildir?", options: ["Kapalı teklif usulü", "Açık teklif usulü", "Doğrudan temin usulü", "Pazarlık usulü"], answer: 2 }
            ]
        },
        {
            id: 18,
            name: "4734 sayılı Kamu İhale Kanunu",
            questionCount: 2,
            icon: "📊",
            flashcards: [
                { front: "Geçici teminat oranı ne kadardır?", back: "Teklif edilen bedelin %3'ünden az olamaz." },
                { front: "Kesin teminat oranı ne kadardır?", back: "Sözleşme bedelinin %6'sı." },
                { front: "Eşik değeri aşan ihalelerde ilan süresi kaç gündür?", back: "En az 40 gün önce ilan yapılır." }
            ],
            questions: [
                { q: "4734 sayılı Kanuna göre, yaklaşık maliyeti eşik değerlere eşit veya bu değerleri aşan belli istekliler arasında yapılacak ihalelerde, yeterliği belirlenen adaylara ihale gününden en az kaç gün önce davet mektubu gönderilmesi zorunludur?", options: ["On beş", "Otuz", "Otuz beş", "Kırk"], answer: 3 },
                { q: "4734 sayılı Kanunun temel ilkelerinden hangisi değildir?", options: ["Saydamlık", "Rekabet", "Gizlilik", "Eşit muamele"], answer: 2 }
            ]
        },
        {
            id: 19,
            name: "4735 sayılı Kamu İhale Sözleşmeleri Kanunu",
            questionCount: 3,
            icon: "📝",
            flashcards: [
                { front: "Sözleşme türleri nelerdir?", back: "Anahtar teslimi götürü bedel, birim fiyat, karma sözleşme." },
                { front: "Mücbir sebepler nelerdir?", back: "Doğal afetler, kanuni grev, salgın hastalık, kısmi veya genel seferberlik." }
            ],
            questions: [
                { q: "4735 sayılı Kanuna göre, aşağıdakilerden hangisi mücbir sebeplerden biri değildir?", options: ["Doğal afetler", "Kanuni grev", "Ekonomik kriz", "Salgın hastalık"], answer: 2 },
                { q: "4735 sayılı Kanuna göre, idarenin sözleşme hükümlerinde değişiklik yapabilmesi için aşağıdaki şartlardan hangisi aranmaz?", options: ["İşin süresinin uzatılması", "Kamu yararı maksadıyla tek taraflı değişiklik yapılması", "Sözleşme bedelinin aşılması", "İşin yapılma yerinin değiştirilmesi"], answer: 2 },
                { q: "4735 sayılı Kanuna göre, sözleşme bedelinin aşılmaması ve karşılıklı anlaşma kaydıyla aşağıdakilerden hangisi değişikliğe konu olabilir?", options: ["İşin süresi", "Sözleşme konusu", "İşin yapılma veya teslim yeri", "Sözleşme bedeli"], answer: 2 }
            ]
        },
        {
            id: 20,
            name: "5442 sayılı İl İdaresi Kanunu",
            questionCount: 1,
            icon: "🗺️",
            flashcards: [
                { front: "İlçe idare kurulu kimlerden oluşur?", back: "Kaymakam başkanlığında yazı işleri müdürü, mal müdürü, hükûmet hekimi, ilçe milli eğitim müdürü ve tarım müdürü." }
            ],
            questions: [
                { q: "5442 sayılı İl İdaresi Kanunu'na göre, ilçe idare kurulunun teşekkülünde aşağıdakilerden hangisi yer almaz?", options: ["Mal müdürü", "Hukuk işleri müdürü", "Hükûmet hekimi", "Yazı işleri müdürü"], answer: 1 }
            ]
        },
        {
            id: 21,
            name: "5482 sayılı İl Şurası Kanunu",
            questionCount: 3,
            icon: "🏛️",
            flashcards: [
                { front: "İl Şurası nedir?", back: "İl düzeyinde eğitim hizmetlerinin planlanması ve değerlendirilmesi için oluşturulan danışma organıdır." }
            ],
            questions: [
                { q: "5482 sayılı Kanuna göre, il şurası ne zaman toplanır?", options: ["Her ay", "Üç ayda bir", "Altı ayda bir", "Yılda bir"], answer: 3 },
                { q: "5482 sayılı Kanuna göre, il şurasına kim başkanlık eder?", options: ["Vali", "Belediye başkanı", "İl milli eğitim müdürü", "Kaymakam"], answer: 0 },
                { q: "5482 sayılı Kanuna göre, aşağıdakilerden hangisi il şurasının görevlerinden değildir?", options: ["İldeki eğitim hizmetlerini değerlendirmek", "Öğretmen atamalarını yapmak", "Eğitim sorunlarını görüşmek", "Eğitim politikalarına katkı sağlamak"], answer: 1 }
            ]
        },
        {
            id: 22,
            name: "4688 sayılı Kamu Görevlileri Sendikaları ve Toplu Sözleşme Kanunu",
            questionCount: 3,
            icon: "✊",
            flashcards: [
                { front: "Kamu Personeli Danışma Kurulu ne zaman toplanır?", back: "Her yıl mart ve kasım aylarında." },
                { front: "Konfederasyon kurmak için kaç sendika gerekir?", back: "Değişik hizmet kollarında en az 5 sendika." },
                { front: "Toplu sözleşme görüşmeleri ne zaman sona erer?", back: "30 Ağustos" }
            ],
            questions: [
                { q: "4688 sayılı Kanuna göre, Kamu Personeli Danışma Kurulu her yıl hangi aylarda toplanır?", options: ["Ocak - Temmuz", "Şubat - Ekim", "Mart - Kasım", "Nisan - Ekim"], answer: 2 },
                { q: "4688 sayılı Kanuna göre, 'Kamu İşvereni' aşağıdakilerden hangisini ifade eder?", options: ["Kamu görevlilerinin çalıştığı tüzel kişiliği olan ya da olmayan kamu kurum ve kuruluşları", "Çalışma ve Sosyal Güvenlik Bakanlığı", "Kamu İşveren Heyeti Başkanı", "Sendika temsilcileri"], answer: 0 },
                { q: "4688 sayılı Kanuna göre, sendika ve konfederasyonların kuruluş işlemleri ile ilgili aşağıdakilerden hangisi yanlıştır?", options: ["Valilik belgeleri 15 iş günü içinde Bakanlığa gönderir", "Sendikalar önceden izin almaksızın kurulur", "Sendika kurucusu olabilmek için kamu görevlisi olarak çalışmak yeterlidir", "Adalet Bakanlığı sendikalar için birer bilgi kaydı tutar"], answer: 3 }
            ]
        },
        {
            id: 23,
            name: "5580 sayılı Özel Öğretim Kurumları Kanunu",
            questionCount: 3,
            icon: "🎒",
            flashcards: [
                { front: "Kurum açma izni reddi halinde itiraz nereye yapılır?", back: "Milli Eğitim Bakanlığı" },
                { front: "İtiraz kaç iş günü içinde karara bağlanır?", back: "On beş iş günü" },
                { front: "Resmi okul öğretmenleri özel okullarda kaç saat ders verebilir?", back: "Haftalık ders saatinin yarısı kadar." }
            ],
            questions: [
                { q: "5580 sayılı Kanuna göre, kurum açma izin talebinin valilikçe reddi halinde yapılan itiraz Milli Eğitim Bakanlığınca en geç kaç iş günü içinde karara bağlanır?", options: ["Beş", "Yedi", "On", "On beş"], answer: 3 },
                { q: "5580 sayılı Kanuna göre, resmi okullarda görevli öğretmenler özel okullarda aylık karşılığı okutmakla yükümlü olduğu haftalık ders saati sayısının en fazla ne kadarı oranında ücretli ders verebilir?", options: ["Tamamı kadar", "Yarısı kadar", "Dörtte biri kadar", "Üçte biri kadar"], answer: 1 },
                { q: "5580 sayılı Kanuna göre, eğitim-öğretim ve kurumların yönetimi ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["Bir kimse birden fazla kurumun kurucusu olamaz", "Kurumlarda hiçbir şekilde resmi kurumlardan farklı program uygulanamaz", "Yönetimleri birleştirilecek kurumlarla ilgili usul ve esaslar kanunla belirlenir", "Bünyesinde birden fazla kurum bulunan kurumlara bir genel müdür atanır"], answer: 3 }
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
