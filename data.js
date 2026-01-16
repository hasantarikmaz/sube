// Şube Müdürlüğü Sınav Hazırlık - Veri Dosyası
// Gerçek 2018 ve 2023 sınav sorularından esinlenerek hazırlanmış ZOR soru bankası
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
                { front: "Belirtili isim tamlaması nedir?", back: "Hem tamlayanın hem tamlananın ek aldığı tamlamadır. Örn: Annemin arabası" },
                { front: "Zarf tümleci nedir?", back: "Yüklemi zaman, yer-yön, durum, miktar bakımından belirleyen öğedir." }
            ],
            questions: [
                { q: "Dil, insanlar arasında anlaşmayı sağlayan, düşünce ve duyguların aktarılmasına imkân veren bir araçtır. Dilin bu özelliği onun hangi işlevini gösterir?", options: ["Kültür taşıyıcılığı işlevi", "İletişim işlevi", "Düşünceyi geliştirme işlevi", "Millet oluşturma işlevi"], answer: 1 },
                { q: "'Sabahleyin erkenden kalktı, kahvaltısını yaptı, işe gitmek için evden çıktı.' cümlesindeki fiillerin ortak özelliği aşağıdakilerden hangisidir?", options: ["Hepsi geçişli fiildir.", "Hepsi bildirme kipindedir.", "Hepsi belirli geçmiş zamandadır.", "Hepsi çatı bakımından etkendir."], answer: 2 },
                { q: "'Öğretmenimiz, öğrencilerin başarılı olması için çok çalıştığını söyledi.' cümlesinde altı çizili söz öbeği cümlenin hangi öğesidir?", options: ["Özne", "Belirtili nesne", "Zarf tümleci", "Dolaylı tümleç"], answer: 1 },
                { q: "Aşağıdaki cümlelerin hangisinde hem belirtili isim tamlaması hem de sıfat tamlaması bir arada kullanılmıştır?", options: ["Bahçedeki ağaçlar meyve vermeye başladı.", "Annemin yaptığı güzel yemekleri özledim.", "Öğrenciler sınav sorularını çözdü.", "Yolda gördüğüm adam tanıdık geldi."], answer: 1 },
                { q: "'Bu konuda uzman kişilerin görüşleri alınmalı, kararlar aceleye getirilmeden verilmelidir.' cümlesiyle ilgili aşağıdakilerden hangisi doğrudur?", options: ["Basit cümledir.", "Bağımlı sıralı cümledir.", "Bağımsız sıralı cümledir.", "Birleşik cümledir."], answer: 2 }
            ]
        },
        {
            id: 2,
            name: "Yönetimde İnsan İlişkileri ve İletişim",
            questionCount: 2,
            icon: "🤝",
            flashcards: [
                { front: "Kariyer platosu (sürdürme) aşaması nedir?", back: "Bireyin gelişiminin sınırlarına erişip, mevcut kazançları korumaya yöneldiği, saygınlık ihtiyacının öne çıktığı aşamadır." },
                { front: "Hawthorne araştırmaları neyi ortaya koydu?", back: "İş veriminin fiziksel koşullardan çok sosyal faktörlerden etkilendiğini ortaya koymuştur." }
            ],
            questions: [
                { q: "Bireyin, gelişiminin sınırlarına erişip yaptığı işte yoğunlaştığı aşamadır. Diğer aşamalarda birey maddi-manevi pek çok ihtiyacını karşıladığı için artık yeni kazançlar sağlayamaz. Var olan kazançlarını korumaya yönelir ve yaratıcılığını devam ettirebilir. Kişinin bu aşamadaki en önemli ihtiyacının saygınlık olduğu kabul edilir. Yine bu dönemde, kariyerinde daha fazla ilerleyemeyen birey, işinden yeni doyumlar sağlayamadığı takdirde fizyolojik ve psikolojik sorunlar yaşabilir, başarısı düşer. Kariyer devamlılığı açısından oldukça önemli bir aşamadır. Bu parçada sözü edilen kariyer aşaması aşağıdakilerden hangisidir?", options: ["Çekilme", "Oluşum", "Gelişme", "Sürdürme", "Meslek Seçimi"], answer: 3 },
                { q: "Örgütsel iletişimde resmi olmayan kanallarla yayılan, çoğunlukla söylenti ve dedikodu şeklinde ortaya çıkan, hızlı yayılan ancak doğruluğu kesin olmayan bilgi akışını ifade eden kavram aşağıdakilerden hangisidir?", options: ["Dikey iletişim", "Yatay iletişim", "Çapraz iletişim", "Asma çubuğu (Grapevine)", "Formel iletişim"], answer: 3 }
            ]
        },
        {
            id: 3,
            name: "Yönetim, Liderlik ve Organizasyon",
            questionCount: 3,
            icon: "👔",
            flashcards: [
                { front: "Yönetimin temel fonksiyonları nelerdir?", back: "Planlama, örgütleme, yöneltme ve denetim." },
                { front: "Komuta birliği ilkesi nedir?", back: "Her astın yalnızca bir üstten emir alması ilkesidir." }
            ],
            questions: [
                { q: "Aşağıdakilerden hangisi Henri Fayol'un ortaya koyduğu yönetim ilkelerinden 'komuta birliği' ilkesinin tanımıdır?", options: ["İş bölümü ve uzmanlaşma sağlanmalıdır.", "Her ast yalnızca bir üstten emir almalıdır.", "Yetki ve sorumluluk denk olmalıdır.", "Örgüt çıkarları kişisel çıkarların üstünde tutulmalıdır.", "Çalışanlara adil davranılmalıdır."], answer: 1 },
                { q: "Bir örgütün iç çevre analizinde güçlü ve zayıf yönlerini, dış çevre analizinde ise fırsat ve tehditleri değerlendiren stratejik yönetim aracı aşağıdakilerden hangisidir?", options: ["Balanced Scorecard", "Benchmarking", "SWOT Analizi", "Toplam Kalite Yönetimi", "Stratejik Planlama"], answer: 2 },
                { q: "Yönetim teorilerinin gelişim sürecinde, çalışanların sosyal ve psikolojik ihtiyaçlarının iş verimliliği üzerindeki etkisini ortaya koyan ve Elton Mayo tarafından gerçekleştirilen araştırma aşağıdakilerden hangisidir?", options: ["Bürokrasi Teorisi Araştırması", "Bilimsel Yönetim Araştırması", "Hawthorne Araştırmaları", "Sistem Teorisi Araştırması", "Durumsallık Araştırması"], answer: 2 }
            ]
        },
        {
            id: 4,
            name: "İnsan Hakları ve Demokrasi",
            questionCount: 1,
            icon: "⚖️",
            flashcards: [
                { front: "İnsan Hakları Evrensel Beyannamesi ne zaman kabul edildi?", back: "10 Aralık 1948 tarihinde Birleşmiş Milletler Genel Kurulu tarafından kabul edilmiştir." }
            ],
            questions: [
                { q: "Birleşmiş Milletler Genel Kurulu tarafından kabul edilen ve tüm insanların doğuştan sahip olduğu temel hak ve özgürlükleri düzenleyen, uluslararası insan hakları hukukunun temel belgesi olan İnsan Hakları Evrensel Beyannamesi hangi tarihte kabul edilmiştir?", options: ["10 Aralık 1945", "10 Aralık 1948", "10 Aralık 1950", "10 Aralık 1953", "10 Aralık 1955"], answer: 1 }
            ]
        },
        {
            id: 5,
            name: "Yönetimde Etik",
            questionCount: 1,
            icon: "🎯",
            flashcards: [
                { front: "Kamu görevlilerinin uyması gereken etik ilkeler nelerdir?", back: "Dürüstlük, tarafsızlık, saydamlık, hesap verebilirlik, kamu yararını gözetme." }
            ],
            questions: [
                { q: "Aşağıdakilerden hangisi bir okul yöneticisinin, etik dışı davranışlardan kaçınmak için uyması gereken ilkelerden değildir?", options: ["Ayrımcılığın ortadan kaldırılması", "Etik mevzuatına uygun hareket edilmesi", "Bütün grupların hakları arasında denge kurulması", "Herkes tarafından istenen kararın her zaman doğru kabul edilmesi", "Etik davranış, doğruluk ve ahlaki eylemlerle bütünleşmesi"], answer: 3 }
            ]
        },
        {
            id: 6,
            name: "Türk İdare Sistemi",
            questionCount: 1,
            icon: "🏛️",
            flashcards: [
                { front: "İdari vesayet nedir?", back: "Merkezi idarenin mahalli idareler üzerindeki denetim yetkisidir. Kanunla düzenlenir." }
            ],
            questions: [
                { q: "I. Müşterek emanet usulü\nII. Ruhsat usulü\nIII. İltizam usulü\nIV. İmtiyaz usulü\n\nNumaralanmış usullerin hangilerinde bir kamu hizmetinin görülmesi özel hukuk kişisine sözleşme ile devredilemez?", options: ["Yalnız I", "Yalnız II", "III ve IV", "I, II ve III", "I, II, III ve IV"], answer: 0 }
            ]
        },
        {
            id: 7,
            name: "Protokol Kuralları",
            questionCount: 1,
            icon: "🎩",
            flashcards: [
                { front: "Hediye alma-verme kuralları nelerdir?", back: "Hediye gönderene mektupla/telefonla teşekkür edilir. Aylık asgari ücretin on katını aşmayan hediyeler kuruma beyan edilir. Aynı statüdeki kişilere aynı hediye verilir." }
            ],
            questions: [
                { q: "Protokol kurallarına göre, 'hediye alma ve sunma' ile ilgili aşağıdakilerden hangisi yanlıştır?", options: ["Hediye gönderene mektupla veya telefonla teşekkür edilmelidir.", "Uluslararası ilişkilerde parasal değeri aylık asgari ücretin on katının altında olan hediyeler kuruma beyan edilmelidir.", "Hediyeler konuklara makamda yapılan resmî ziyaret veya toplantı sonunda takdim ve teati edilebilir.", "Kurumlar arası ve uluslararası ilişkilerde aynı statüdeki kişilere aynı hediye verilmelidir.", "Konut dışında otelde, restoranda verilen resepsiyon ve yemek davetlerine hediye gönderilir."], answer: 4 }
            ]
        },
        {
            id: 8,
            name: "Atatürk İlkeleri ve İnkılap Tarihi",
            questionCount: 2,
            icon: "🇹🇷",
            flashcards: [
                { front: "Serbest Cumhuriyet Fırkası ne zaman ve kim tarafından kuruldu?", back: "12 Ağustos 1930'da Fethi Okyar tarafından kuruldu." },
                { front: "ABD'nin I. Dünya Savaşı'na girişi", back: "1917'de Almanya'ya savaş açarak İtilaf Devletleri safında savaşa girdi." }
            ],
            questions: [
                { q: "Çok partili siyasi hayata geçiş denemelerinden biri olarak 12 Ağustos 1930'da kurulan ve kısa süre sonra kendini fesheden siyasi parti olan Serbest Cumhuriyet Fırkasının kurucusu aşağıdakilerden hangisidir?", options: ["Fuat Köprülü", "Fethi Okyar", "Adnan Adıvar", "Rauf Orbay", "Celal Bayar"], answer: 1 },
                { q: "Aşağıdakilerden hangisi I. Dünya Savaşı sırasında İtilaf Devletleri'nin lehine etki eden gelişmelerdendir?", options: ["Rusya'da Bolşevik İhtilali'nin çıkması", "Bulgaristan'ın İttifak Devletleri safında savaşa katılması", "ABD'nin Almanya'ya savaş açması", "Osmanlı Devleti'nin Çanakkale Cephesi'nde başarılı olması", "Kut'ül-Amâre'de İngiliz kuvvetlerinin yenilgiye uğraması"], answer: 2 }
            ]
        },
        {
            id: 9,
            name: "Genel Kültür",
            questionCount: 5,
            icon: "🌍",
            flashcards: [
                { front: "Uluslararası Çalışma Örgütü (ILO) hangi antlaşma ile kuruldu?", back: "1919 Versay Antlaşması ile kuruldu." },
                { front: "Pulitzer Ödülü nedir?", back: "Columbia Üniversitesi tarafından gazetecilik, edebiyat ve müzik alanlarında verilen prestijli ödül." }
            ],
            questions: [
                { q: "Uluslararası Çalışma Teşkilatı (ILO), I. Dünya Savaşı'nın ardından imzalanan barış antlaşmalarından hangisi ile kurulmuştur?", options: ["Paris Antlaşması", "Cenevre Antlaşması", "Versay Antlaşması", "Ottawa Antlaşması", "Lizbon Antlaşması"], answer: 2 },
                { q: "Türk edebiyatında aruzu Türkçe'ye başarıyla uygulayan dört şairden biri olarak bilinen, 'Kendi Gök Kubbemiz, Eğil Dağlar, Aziz İstanbul' adlı eserleri olan şair aşağıdakilerden hangisidir?", options: ["Fazıl Hüsnü Dağlarca", "Mehmet Âkif Ersoy", "Ahmet Haşim", "Tevfik Fikret", "Yahya Kemal Beyatlı"], answer: 4 },
                { q: "New York'ta bulunan Columbia Üniversitesi tarafından gazetecilik, edebiyat ve müzik alanlarında verilen ödül aşağıdakilerden hangisidir?", options: ["Pulitzer", "Oscar", "Emmy", "Ramon Magsaysay", "National Geographic"], answer: 0 },
                { q: "Aşağıdakilerden hangisi Türk Devletleri Teşkilatında gözlemci statüsünde yer alan ülkelerden biridir?", options: ["Kazakistan", "Özbekistan", "Macaristan", "Azerbaycan", "Kırgızistan"], answer: 2 },
                { q: "Aşağıdaki tarihî yapılardan hangisi Güneydoğu Anadolu bölgesindedir?", options: ["Akdamar Kilisesi", "Mor Gabriel Manastırı", "İnce Minareli Medrese", "Ani Harabeleri", "Çifte Minareli Medrese"], answer: 1 }
            ]
        },
        {
            id: 10,
            name: "T.C. Anayasası",
            questionCount: 4,
            icon: "📜",
            flashcards: [
                { front: "TBMM üyeleri kimi temsil eder?", back: "Seçildikleri bölgeyi değil, bütün milleti temsil ederler (Anayasa m.80)." },
                { front: "Bireysel başvuru hangi mahkemeye yapılır?", back: "Anayasa Mahkemesine yapılır." }
            ],
            questions: [
                { q: "T.C. Anayasası'na göre, Türkiye Büyük Millet Meclisi üyeleri aşağıdakilerden hangisini temsil eder?", options: ["Seçildikleri bölgeyi", "Kendilerini seçenleri", "Devleti", "Bütün milleti", "Siyasi partilerini"], answer: 3 },
                { q: "T.C. Anayasası'na göre, 'bireysel başvuru' ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["Herkes, Anayasada güvence altına alınmış temel hak ve özgürlüklerinden, Avrupa İnsan Hakları Sözleşmesi kapsamındaki herhangi birinin kamu gücü tarafından ihlal edildiği iddiasıyla Anayasa Mahkemesine başvurabilir.", "Herkes, Cumhurbaşkanı yardımcıları ve bakanlar hakkında görevleriyle ilgili suç işledikleri iddiasıyla Anayasa Mahkemesine başvurabilir.", "Herkes, kanunların, Cumhurbaşkanlığı kararnamelerinin, TBMM İçtüzüğü'nün şekil ve esas bakımından Anayasaya aykırılığı iddiasıyla iptali için Anayasa Mahkemesine başvurabilir.", "Herkes, yasama dokunulmazlığının kaldırılmasına veya milletvekilliğinin düşmesine ilişkin kararlara itiraz için Anayasa Mahkemesine başvurabilir.", "Bireysel başvuru Danıştay'a yapılır."], answer: 0 },
                { q: "T.C. Anayasası'na göre, aşağıdakilerden hangisi Cumhurbaşkanlığı için aday gösteremez?", options: ["Siyasi parti grupları", "Meclis üye tamsayısının beşte biri tutarında milletvekili", "En son yapılan genel seçimde toplam geçerli oyların yüzde beşini alan bir siyasi parti", "En son yapılan genel seçimde toplam geçerli oyların birlikte yüzde beşini alan birden fazla siyasi parti", "Yüz bin seçmen"], answer: 1 },
                { q: "T.C. Anayasası'na göre, aşağıdakilerden hangisi 'Kişinin Hakları ve Ödevleri' içerisinde sayılmıştır?", options: ["Toplantı ve gösteri yürüyüşü düzenleme hakkı", "Grev hakkı ve lokavt", "Türk vatandaşlığı", "Sendika kurma hakkı", "Eğitim ve öğrenim hakkı ve ödevi"], answer: 2 }
            ]
        },
        {
            id: 11,
            name: "657 sayılı Devlet Memurları Kanunu",
            questionCount: 4,
            icon: "👨‍💼",
            flashcards: [
                { front: "Kademe ilerlemesinin durdurulması cezası süresi", back: "Fiilin ağırlık derecesine göre 1-3 yıl süreyle verilir." },
                { front: "Disiplin cezasına itiraz süresi", back: "Kararın tebliğinden itibaren 7 gün içinde yapılır." },
                { front: "Devlet memurluğundan çıkarma cezası kim verir?", back: "Yüksek disiplin kurulu kararı ile verilir." }
            ],
            questions: [
                { q: "657 sayılı Devlet Memurları Kanunu'na göre, 'kademe ilerlemesinin durdurulması' cezası fiilin ağırlık derecesine göre memurun bulunduğu kademede ilerlemesinin en fazla kaç yıl süreyle durdurulmasıdır?", options: ["1 yıl", "2 yıl", "3 yıl", "4 yıl", "5 yıl"], answer: 2 },
                { q: "657 sayılı Devlet Memurları Kanunu'na göre, aşağıdaki fiil ve hallerden hangisi 'aylıktan kesme' cezasını gerektiren fiil ve hallerdendir?", options: ["Verilen emir ve görevlerin tam ve zamanında yapılmasında, görev mahallinde kurumlarca belirlenen usul ve esasların yerine getirilmesinde, görevle ilgili resmi belge, araç ve gereçlerin korunması, kullanılması ve bakımında kayıtsızlık göstermek veya düzensiz davranmak", "Göreve sarhoş gelmek, görev yerinde alkollü içki içmek", "Kasıtlı olarak; verilen emir ve görevleri tam ve zamanında yapmamak, görev mahallinde kurumlarca belirlenen usul ve esasları yerine getirmemek, görevle ilgili resmi belge, araç ve gereçleri korumamak, bakımını yapmamak, hor kullanmak", "Özürsüz olarak bir veya iki gün göreve gelmemek", "Devlet memuru vakarına yakışmayan tutum ve davranışta bulunmak"], answer: 3 },
                { q: "657 sayılı Devlet Memurları Kanunu'na göre, 'Devlet memurluğundan çıkarma' cezası aşağıdakilerden hangisi tarafından verilir?", options: ["Disiplin amiri", "Atamaya yetkili amir", "Disiplin kurulu", "Yüksek disiplin kurulu", "Bakan"], answer: 3 },
                { q: "657 sayılı Devlet Memurları Kanunu'na göre, disiplin amirleri tarafından verilen uyarma, kınama ve aylıktan kesme cezalarına karşı disiplin kuruluna, kademe ilerlemesinin durdurulması cezasına karşı yüksek disiplin kuruluna itiraz süresi kararın ilgiliye tebliğinden itibaren kaç gündür?", options: ["3 gün", "5 gün", "7 gün", "10 gün", "15 gün"], answer: 2 }
            ]
        },
        {
            id: 12,
            name: "1739 sayılı Milli Eğitim Temel Kanunu",
            questionCount: 4,
            icon: "🎓",
            flashcards: [
                { front: "Zorunlu eğitim süresi", back: "12 yıl (4+4+4 sistemi)." },
                { front: "Ortaöğretim süresi", back: "4 yıldır." },
                { front: "Mecburi ilköğretim çağı", back: "5 yaşını dolduran çocuklar 6 yaşını bitirdikleri yılın eylül ayı sonuna kadar ilkokula başlar." }
            ],
            questions: [
                { q: "1739 sayılı Millî Eğitim Temel Kanunu'na göre, aşağıdakilerden hangisi Türk millî eğitiminin temel ilkelerinden biri değildir?", options: ["Genellik ve eşitlik", "Bilimsellik", "Planlılık", "Seçkincilik", "Süreklilik"], answer: 3 },
                { q: "1739 sayılı Millî Eğitim Temel Kanunu'na göre, ortaöğretim; ilköğretime dayalı, en az kaç yıllık genel, meslekî ve teknik öğretim kurumlarının tümünü kapsar?", options: ["3 yıllık", "4 yıllık", "5 yıllık", "6 yıllık", "8 yıllık"], answer: 1 },
                { q: "1739 sayılı Millî Eğitim Temel Kanunu'na göre, mecburi ilköğretim çağı kaç yaşından başlar?", options: ["5 yaşını dolduran ve 6 yaşına giren çocuklar", "6 yaşını dolduran çocuklar", "66 ayını dolduran çocuklar", "72 ayını dolduran çocuklar", "5-14 yaş arası çocuklar"], answer: 0 },
                { q: "1739 sayılı Millî Eğitim Temel Kanunu'nun 'eğitim hakkı' ile ilgili temel ilkesine göre, aşağıdakilerden hangisi doğrudur?", options: ["Sadece Türk vatandaşları eğitim hakkına sahiptir.", "İlköğretim kız ve erkek bütün vatandaşlar için zorunludur ve devlet okullarında parasızdır.", "Eğitim hakkı sosyo-ekonomik duruma göre belirlenir.", "Özel okullar zorunlu eğitimden muaftır.", "Eğitim hakkı yalnızca çalışanlar içindir."], answer: 1 }
            ]
        },
        {
            id: 13,
            name: "222 sayılı İlköğretim ve Eğitim Kanunu",
            questionCount: 4,
            icon: "🏫",
            flashcards: [
                { front: "Mecburi ilköğretim çağı", back: "6-13 yaş arası (6 yaşını bitirmiş, 14 yaşını bitirmemiş çocukları kapsar)." },
                { front: "İlköğretim okullarının yapım giderleri", back: "Devlet bütçesi ve il özel idaresi tarafından karşılanır." }
            ],
            questions: [
                { q: "222 sayılı İlköğretim ve Eğitim Kanunu'na göre, mecburi ilköğretim çağı, 6 yaşını bitirmiş çocuklarla başlar ve kaç yaşını bitirmiş çocukları kapsar?", options: ["12 yaşını bitirmiş", "13 yaşını bitirmiş", "14 yaşını bitirmemiş", "15 yaşını bitirmemiş", "11 yaşını bitirmiş"], answer: 2 },
                { q: "222 sayılı İlköğretim ve Eğitim Kanunu'na göre, köylerdeki ilköğretim okullarının öğretmen lojmanlarının yapımı, onarımı ve eşyaları aşağıdaki bütçelerden hangisinden karşılanır?", options: ["Milli Eğitim Bakanlığı bütçesi", "Köy bütçesi", "İl özel idaresi bütçesi", "Belediye bütçesi", "Valilik bütçesi"], answer: 2 },
                { q: "222 sayılı İlköğretim ve Eğitim Kanunu'na göre, okul-aile birliklerinin gelirleri aşağıdakilerden hangisine harcanamaz?", options: ["Okulun eğitim ve öğretim hizmetlerinin geliştirilmesi", "Öğrenci bursları", "Okul personeli maaş ve ücretleri", "Sosyal ve kültürel faaliyetler", "Okulun fiziki ihtiyaçları"], answer: 2 },
                { q: "222 sayılı İlköğretim ve Eğitim Kanunu'na göre, mecburi ilköğretim çağında olup da süresinde okula kayıtlarını yaptırmayan çocukların velilerine hangi ceza uygulanır?", options: ["Hapis cezası", "Kınama cezası", "Para cezası", "Uyarı cezası", "Disiplin cezası"], answer: 2 }
            ]
        },
        {
            id: 14,
            name: "652 sayılı MEB Teşkilat ve Görevleri KHK",
            questionCount: 4,
            icon: "🏢",
            flashcards: [
                { front: "Talim ve Terbiye Kurulu'nun görevi", back: "Eğitim-öğretim programlarını hazırlamak ve geliştirmek, ders kitaplarını incelemek ve onaylamak." },
                { front: "MEB taşra teşkilatı", back: "İl ve ilçe milli eğitim müdürlüklerinden oluşur." }
            ],
            questions: [
                { q: "652 sayılı Kanun Hükmünde Kararname'ye göre, eğitim ve öğretim ile ilgili plan ve programların hazırlanması, geliştirilmesi ve değerlendirilmesi, ders kitapları ve eğitim araçlarının incelenmesi ve onaylanması görevleri aşağıdaki birimlerden hangisine aittir?", options: ["Temel Eğitim Genel Müdürlüğü", "Ortaöğretim Genel Müdürlüğü", "Talim ve Terbiye Kurulu Başkanlığı", "Strateji Geliştirme Başkanlığı", "Teftiş Kurulu Başkanlığı"], answer: 2 },
                { q: "652 sayılı Kanun Hükmünde Kararname'ye göre, Milli Eğitim Bakanlığı'nın danışma ve denetim birimi aşağıdakilerden hangisidir?", options: ["Personel Genel Müdürlüğü", "Talim ve Terbiye Kurulu Başkanlığı", "Strateji Geliştirme Başkanlığı", "Teftiş Kurulu Başkanlığı", "Hukuk Müşavirliği"], answer: 3 },
                { q: "652 sayılı Kanun Hükmünde Kararname'ye göre, il millî eğitim müdürleri aşağıdakilerden hangisi tarafından atanır?", options: ["Vali", "Millî Eğitim Bakanı", "Cumhurbaşkanı", "Müsteşar", "Personel Genel Müdürü"], answer: 1 },
                { q: "652 sayılı Kanun Hükmünde Kararname'ye göre, aşağıdakilerden hangisi MEB merkez teşkilatı ana hizmet birimlerinden biri değildir?", options: ["Temel Eğitim Genel Müdürlüğü", "Ortaöğretim Genel Müdürlüğü", "İlçe Millî Eğitim Müdürlüğü", "Meslekî ve Teknik Eğitim Genel Müdürlüğü", "Hayat Boyu Öğrenme Genel Müdürlüğü"], answer: 2 }
            ]
        },
        {
            id: 15,
            name: "4483 sayılı Memurlar Hakkında Soruşturma Kanunu",
            questionCount: 2,
            icon: "⚖️",
            flashcards: [
                { front: "Ön inceleme süresi", back: "30 gün, zorunlu hallerde 15 gün daha uzatılabilir." },
                { front: "Soruşturma izni kararına itiraz süresi", back: "Kararın tebliğinden itibaren 10 gün içinde bölge idare mahkemesine itiraz edilir." }
            ],
            questions: [
                { q: "4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun'a göre, ön inceleme ile görevlendirilen kişi veya kişiler, bu Kanunda hüküm bulunmayan hususlarda Ceza Muhakemeleri Usulü Kanununa göre işlem yapabilir; hakkında inceleme yapılan memur veya diğer kamu görevlisinin ifadesini de almak suretiyle yetkileri dahilindeki gerekli bilgi ve belgeleri toplayıp, görüşlerini içeren bir rapor düzenleyerek durumu izin vermeye yetkili mercie sunarlar. Bu işlemlerin en geç kaç gün içinde tamamlanması zorunludur?", options: ["15 gün", "30 gün", "45 gün", "60 gün", "90 gün"], answer: 1 },
                { q: "4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun'a göre, yetkili merciin soruşturma izni verilmesine veya verilmemesine ilişkin kararına karşı hakkında inceleme yapılan memur veya diğer kamu görevlisi, kararın kendisine tebliğinden itibaren kaç gün içinde itiraz edebilir?", options: ["5 gün", "7 gün", "10 gün", "15 gün", "30 gün"], answer: 2 }
            ]
        },
        {
            id: 16,
            name: "5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu",
            questionCount: 2,
            icon: "💰",
            flashcards: [
                { front: "Harcama yetkilisi kimdir?", back: "Bütçeyle ödenek tahsis edilen her bir harcama biriminin en üst yöneticisidir." },
                { front: "İç denetçiler kime bağlıdır?", back: "Üst yöneticiye bağlıdır." }
            ],
            questions: [
                { q: "5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu'na göre, bütçeyle ödenek tahsis edilen her bir harcama biriminin en üst yöneticisi aşağıdakilerden hangisidir?", options: ["Muhasebe yetkilisi", "Gerçekleştirme görevlisi", "Harcama yetkilisi", "Üst yönetici", "Mali hizmetler birimi yöneticisi"], answer: 2 },
                { q: "5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu'na göre, iç denetçilerin görevlerinin yerine getirilmesinde aşağıdakilerden hangisine karşı sorumlu oldukları ve bağlı bulundukları makam hangisidir?", options: ["Maliye Bakanlığı", "Sayıştay", "Üst yönetici", "Harcama yetkilisi", "İç Denetim Koordinasyon Kurulu"], answer: 2 }
            ]
        },
        {
            id: 17,
            name: "2886 sayılı Devlet İhale Kanunu",
            questionCount: 2,
            icon: "📋",
            flashcards: [
                { front: "Geçici teminat oranı", back: "Tahmin edilen bedelin %3'üdür." },
                { front: "İhale usulleri", back: "Kapalı teklif, belli istekliler arasında kapalı teklif, açık teklif, pazarlık ve yarışma usulü." }
            ],
            questions: [
                { q: "2886 sayılı Devlet İhale Kanunu'na göre, geçici teminat, tahmin edilen bedelin yüzde kaçından az olamaz?", options: ["%1", "%2", "%3", "%5", "%10"], answer: 2 },
                { q: "2886 sayılı Devlet İhale Kanunu'na göre, aşağıdakilerden hangisi bu Kanunda düzenlenen ihale usullerinden biri değildir?", options: ["Kapalı teklif usulü", "Açık teklif usulü", "Doğrudan temin usulü", "Pazarlık usulü", "Yarışma usulü"], answer: 2 }
            ]
        },
        {
            id: 18,
            name: "4734 sayılı Kamu İhale Kanunu",
            questionCount: 2,
            icon: "📊",
            flashcards: [
                { front: "Eşik değeri aşan ihalelerde davet süresi", back: "İhale gününden en az 40 gün önce davet mektubu gönderilir." },
                { front: "Temel ilkeler", back: "Saydamlık, rekabet, eşit muamele, güvenirlik, gizlilik değil!" }
            ],
            questions: [
                { q: "4734 sayılı Kamu İhale Kanunu'na göre, yaklaşık maliyeti eşik değerlere eşit veya bu değerleri aşan belli istekliler arasında yapılacak ihalelerde ön yeterlik değerlendirmesi sonucunda yeterliği belirlenen adaylara ihale gününden en az kaç gün önce davet mektubu gönderilmesi zorunludur?", options: ["On beş", "Otuz", "Otuz beş", "Kırk", "Kırk beş"], answer: 3 },
                { q: "4734 sayılı Kamu İhale Kanunu'nun temel ilkelerinden biri olan 'idareler, bu Kanuna göre yapılacak ihalelerde; saydamlığı, rekabeti, eşit muameleyi, güvenirliği, kamuoyu denetimini sağlamakla sorumludur' hükmünde aşağıdakilerden hangisi yer almaz?", options: ["Saydamlık", "Rekabet", "Gizlilik", "Eşit muamele", "Güvenirlik"], answer: 2 }
            ]
        },
        {
            id: 19,
            name: "4735 sayılı Kamu İhale Sözleşmeleri Kanunu",
            questionCount: 3,
            icon: "📝",
            flashcards: [
                { front: "Mücbir sebepler", back: "Doğal afetler, kanuni grev, genel salgın hastalık, kısmi veya genel seferberlik ilanı." },
                { front: "Sözleşmede değişiklik yapılabilecek haller", back: "Sözleşme bedelinin aşılmaması ve karşılıklı anlaşma kaydıyla işin yapılma veya teslim yeri değiştirilebilir." }
            ],
            questions: [
                { q: "4735 sayılı Kamu İhale Sözleşmeleri Kanunu'na göre, aşağıdakilerden hangisi mücbir sebep olarak kabul edilmez?", options: ["Doğal afetler", "Kanuni grev", "Ekonomik kriz", "Genel salgın hastalık", "Kısmi veya genel seferberlik ilanı"], answer: 2 },
                { q: "4735 sayılı Kamu İhale Sözleşmeleri Kanunu'na göre, idare aşağıdakilerden hangisini sözleşmenin uygulanması sırasında tek taraflı değiştiremez?", options: ["İşin süresini", "İşi yapma veya teslim yerini", "Sözleşme bedelini", "Usul işlemlerini", "Alt yüklenici değişikliğini"], answer: 2 },
                { q: "4735 sayılı Kamu İhale Sözleşmeleri Kanunu'na göre, sözleşme hükümlerinde değişiklik gerektiği takdirde sözleşme bedelinin aşılmaması ve idare ile yüklenicinin karşılıklı olarak anlaşması kaydıyla aşağıdakilerden hangisi değişikliğe konu olabilir?", options: ["Sözleşmenin niteliği", "Sözleşme bedeli", "Yüklenici değişikliği", "İşin yapılma veya teslim yeri", "Kesin teminat oranı"], answer: 3 }
            ]
        },
        {
            id: 20,
            name: "5442 sayılı İl İdaresi Kanunu",
            questionCount: 1,
            icon: "🗺️",
            flashcards: [
                { front: "İlçe idare kurulu üyeleri", back: "Kaymakam başkanlığında; yazı işleri müdürü, mal müdürü, hükûmet hekimi, ilçe milli eğitim müdürü ve tarım müdürü." }
            ],
            questions: [
                { q: "5442 sayılı İl İdaresi Kanunu'na göre, ilçe idare kurulunun teşekkülünde aşağıdakilerden hangisi yer almaz?", options: ["Tahrirat katibi", "Hukuk işleri müdürü", "Hükûmet hekimi", "Mal müdürü", "Veteriner"], answer: 1 }
            ]
        },
        {
            id: 21,
            name: "5482 sayılı İl Şurası Kanunu",
            questionCount: 3,
            icon: "🏛️",
            flashcards: [
                { front: "İl Şurası toplantı sıklığı", back: "Yılda en az bir kez toplanır." },
                { front: "İl Şurasına kim başkanlık eder?", back: "Vali başkanlık eder." }
            ],
            questions: [
                { q: "5482 sayılı İl Şurası Kanunu'na göre, il şurası yılda en az kaç kere toplanır?", options: ["Bir", "İki", "Üç", "Dört", "Altı"], answer: 0 },
                { q: "5482 sayılı İl Şurası Kanunu'na göre, il şurasına aşağıdakilerden hangisi başkanlık eder?", options: ["Belediye başkanı", "İl milli eğitim müdürü", "Kaymakam", "Vali", "İl genel meclisi başkanı"], answer: 3 },
                { q: "5482 sayılı İl Şurası Kanunu'na göre, aşağıdakilerden hangisi il şurasının görevleri arasında yer almaz?", options: ["İldeki eğitim hizmetlerinin değerlendirilmesi", "Öğretmen ve yönetici atamalarının yapılması", "Eğitimle ilgili sorunların görüşülmesi", "Eğitim politikalarına katkı sağlanması", "İl eğitim planlarının değerlendirilmesi"], answer: 1 }
            ]
        },
        {
            id: 22,
            name: "4688 sayılı Kamu Görevlileri Sendikaları ve Toplu Sözleşme Kanunu",
            questionCount: 3,
            icon: "✊",
            flashcards: [
                { front: "Kamu Personeli Danışma Kurulu toplantı zamanı", back: "Her yıl mart ve kasım aylarında toplanır." },
                { front: "Kamu İşvereni tanımı", back: "Kamu görevlilerinin çalıştığı tüzel kişiliği olan ya da olmayan kamu kurum ve kuruluşlarını ifade eder." }
            ],
            questions: [
                { q: "Kamu Personeli Danışma Kurulu, her yıl - - - - ve - - - - aylarında toplanır.\n\n4688 sayılı Kamu Görevlileri Sendikaları ve Toplu Sözleşme Kanunu'na göre, bu hükümde boş bırakılan yerlere aşağıdakilerden hangisi sırasıyla getirilmelidir?", options: ["mart - kasım", "şubat - ekim", "nisan - kasım", "şubat - eylül", "mart - ekim"], answer: 0 },
                { q: "4688 sayılı Kamu Görevlileri Sendikaları ve Toplu Sözleşme Kanunu'nda, aşağıdakilerden hangisi 'Kamu görevlilerinin çalıştığı tüzel kişiliği olan ya da olmayan kamu kurum ve kuruluşlarını ifade eder.' şeklinde tanımlanmıştır?", options: ["Kamu İşvereni", "Kamu Görevlisi", "Kamu İşveren Vekili", "Sendika İşyeri Temsilcisi", "İşyeri Sendika Temsilcisi"], answer: 0 },
                { q: "4688 sayılı Kamu Görevlileri Sendikaları ve Toplu Sözleşme Kanunu'na göre, 'kuruluş işlemleri' ile ilgili aşağıdakilerden hangisi yanlıştır?", options: ["Valilik, tüzük ve belgelerin birer örneğini, on beş iş günü içinde Çalışma ve Sosyal Güvenlik Bakanlığına gönderir.", "Sendika kurucusu olabilmek için kamu görevlisi olarak çalışmak yeterlidir.", "Sendika ve konfederasyonlar önceden izin almaksızın serbestçe kurulurlar.", "Adalet Bakanlığı, sendika ve konfederasyonlar için birer bilgi kaydı tutar.", "Konfederasyon kurucuları, konfederasyonu ilk genel kurula kadar sevk ve idare edeceklerin isimlerini konfederasyon merkezinin bulunacağı ilin valiliğine vermek zorundadırlar."], answer: 3 }
            ]
        },
        {
            id: 23,
            name: "5580 sayılı Özel Öğretim Kurumları Kanunu",
            questionCount: 3,
            icon: "🎒",
            flashcards: [
                { front: "Kurum açma izni reddi halinde itiraz süresi", back: "Ret kararına itiraz, MEB tarafından 15 iş günü içinde karara bağlanır." },
                { front: "Resmi okul öğretmenlerinin özel okullarda ders verme sınırı", back: "Aylık karşılığı okutmakla yükümlü olduğu haftalık ders saatinin yarısı kadar ücretli ders verebilir." }
            ],
            questions: [
                { q: "5580 sayılı Özel Öğretim Kurumları Kanunu'na göre, kurum açma izin talebinin valilikçe reddi hâlinde, bu ret işlemine karşı yapılan itiraz, ilgili Millî Eğitim Bakanlığınca en geç kaç iş günü içinde karara bağlanır?", options: ["Beş", "Yedi", "On", "On beş", "Otuz"], answer: 3 },
                { q: "5580 sayılı Özel Öğretim Kurumları Kanunu'na göre, 'kurumlarda çalıştırılacak personel' ile ilgili aşağıdakilerden hangisi yanlıştır?", options: ["Kurumların müdürleri, kurucu/kurucu temsilcisi tarafından seçilir ve çalışma izinleri valiliğin iznine sunulur.", "Gerekli şartları taşıyan yönetici, öğretmen, uzman öğretici ve usta öğreticiler için valilikçe çalışma izni düzenlenir.", "Uzman öğretici, usta öğretici ve öğretmenlik yapma nitelik ve şartlarını taşıyan diğer Devlet memurlarına, ilgili birimlerin izniyle haftada on iki saati geçmemek üzere ücretli ders görevi verilebilir.", "İhtiyaç hâlinde, resmî okullarda görevli öğretmenlere asıl görevlerini aksatmamak ve aylık karşılığı okutmakla yükümlü bulunduğu haftalık ders saati sayısını doldurmaları kaydı ve çalıştıkları kurumların izni ile sadece okullarda, aylık karşılığı okutmakla yükümlü bulunduğu haftalık ders saati sayısının yarısı kadar ücretli ders verilebilir.", "Türkçe'den başka dille öğretim yapan ve yabancılar tarafından açılmış bulunan okulların kurucuları ile müdürleri, Türk müdür başyardımcısı önermek zorunda değildir."], answer: 4 },
                { q: "5580 sayılı Özel Öğretim Kurumları Kanunu'na göre, 'eğitim-öğretim ve kurumların yönetimi' ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["Yönetimleri birleştirilecek kurumlarla ilgili usul ve esaslar kanunla belirlenir.", "Bir kimsenin birden fazla kurumun kurucusu olması mümkün değildir.", "Kurumlarda hiçbir şekilde resmî kurumlardan farklı bir öğretim programı veya haftalık ders çizelgesi uygulanamaz.", "Bünyesinde birden fazla kurum bulunduran kurumlar, başlarına bir genel müdür atanmaksızın faaliyet gösteremez.", "Üzerinde müdürlük görevi bulunmayan bir kurucu, kurumun eğitim-öğretimine ve bunlarla ilgili yönetim işlerine karışamaz."], answer: 3 }
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
