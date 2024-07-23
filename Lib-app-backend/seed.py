from app import app
from models import db, User, Book, Genre, Review
from datetime import datetime

def str_to_date(date_str):
    return datetime.strptime(date_str, '%Y-%m-%d').date()

book_entries = [
    Book(
        title='The Midnight Library',
        author='Matt Haig',
        description='A novel about a woman who explores the infinite possibilities of her life. Nora Seed finds herself in a mysterious library where each book represents a different life she could have lived. As she explores the infinite possibilities, she grapples with her regrets and the choices that led her to her current life.',
        publication_year=2020,
        image_url='https://www.onceuponatrapeze.com/wp-content/uploads/2021/01/52578297._UY475_SS475_.jpg',
        genre_id=1,  # Fiction
        user_id=1,
        reviews=[]
    ),
    Book(
        title='Where the Crawdads Sing',
        author='Delia Owens',
        description=' Set in the marshlands of North Carolina, this novel follows Kya Clark, the mysterious "Marsh Girl." As she grows up isolated from society, her life becomes intertwined with a local murder investigation, revealing secrets and sparking a tale of love and resilience.',
        publication_year=2018,
        image_url='https://target.scene7.com/is/image/Target/GUEST_bd832d15-d67d-4354-9be9-5e93ca9bea18?wid=488&hei=488&fmt=pjpeg',
        genre_id=5,  # Mystery
        user_id=2,
        reviews=[]
    ),
    Book(
        title='The Vanishing Half',
        author='Brit Bennett',
        description='This multi-generational saga explores the lives of twin sisters who choose different paths: one lives as a Black woman, while the other passes as white. The novel delves into issues of identity, family, and the impact of choices on future generations.',
        publication_year=2020,
        image_url='https://kibangabooks.com/wp-content/uploads/2023/12/Vanishing-Half-book-by-Brit-Bennett1684695072.jpeg',
        genre_id=1,  # Fiction
        user_id=1,
        reviews=[]
    ),
    Book(
        title='Normal People',
        author='Sally Rooney',
        description='A novel about the complex relationship between two individuals from school to adulthood. A deeply introspective novel about Connell and Marianne, whose complex relationship evolves from high school to adulthood. The story explores themes of class, intimacy, and the impact of personal growth on their relationship.',
        publication_year=2018,
        image_url='https://target.scene7.com/is/image/Target/GUEST_1d5d6707-bb36-4c5f-932d-97e0d9b59e1e?wid=488&hei=488&fmt=pjpeg',
        genre_id=1,  # Fiction
        user_id=2,
        reviews=[]
    ),
    Book(
        title='The Testaments',
        author='Margaret Atwood',
        description='A sequel to "The Handmaid\'s Tale",  this novel offers new perspectives on the dystopian world of Gilead. Through the voices of three women, it explores the regime\'s inner workings and the ways resistance and change can emerge from the most unlikely places.',
        publication_year=2019,
        image_url='https://images.csmonitor.com/csm/2019/10/1090668_1_1003-testaments_standard.jpg?alias=standard_900x600',
        genre_id=3,  # Science-Fiction
        user_id=1,
        reviews=[]
    ),
    Book(
        title='Educated',
        author='Tara Westover',
        description='This memoir recounts Tara Westover\'s journey from growing up in a strict and abusive household in rural Idaho to earning a PhD from Cambridge University. It is a powerful story of self-discovery and the transformative power of education.',
        publication_year=2018,
        image_url='https://update.lib.berkeley.edu/wp-content/uploads/2019/05/educated.png',
        genre_id=2,  # Non-Fiction
        user_id=2,
        reviews=[]
    ),
    Book(
        title='Circe',
        author='Madeline Miller',
        description='A reimagining of the Greek myth of Circe, the enchantress from Homer\'s "Odyssey." This novel provides a fresh perspective on Circe\'s life, her struggles, and her power, exploring themes of transformation and autonomy.',
        publication_year=2018,
        image_url='https://target.scene7.com/is/image/Target/GUEST_33a5979f-aa3d-4fa2-82da-55d46b837c63?wid=488&hei=488&fmt=pjpeg',
        genre_id=4,  # Fantasy
        user_id=1,
        reviews=[]
    ),
    Book(
        title='Little Fires Everywhere',
        author='Celeste Ng',
        description='In this novel, the lives of two families in the suburban town of Shaker Heights, Ohio, intersect in dramatic and unexpected ways. The story delves into issues of privilege, motherhood, and the consequences of secrets.',
        publication_year=2017,
        image_url='https://target.scene7.com/is/image/Target/GUEST_361bcb0d-e048-45cd-857c-9e6fcccb6546?wid=488&hei=488&fmt=pjpeg',
        genre_id=1,  # Fiction
        user_id=2,
        reviews=[]
    ),
    Book(
        title='The Silent Patient',
        author='Alex Michaelides',
        description='A psychological thriller about a woman who shoots her husband and then stops speaking.  Alicia Berenson, a famous painter, shoots her husband and then becomes mute. A psychotherapist becomes obsessed with uncovering the reasons behind her silence and the truth about the events that transpired.',
        publication_year=2019,
        image_url='https://target.scene7.com/is/image/Target/GUEST_a476fa0f-bbca-49be-95c8-37460db1464f?wid=488&hei=488&fmt=pjpeg',
        genre_id=5,  # Mystery
        user_id=1,
        reviews=[]
    ),
    Book(
        title='The Giver of Stars',
        author='Jojo Moyes',
        description='A historical novel about a group of women who deliver books in rural Kentucky. Set in rural Kentucky during the Great Depression, this novel tells the story of a group of women who deliver books as part of a traveling library. It’s a tale of friendship, resilience, and the power of literature.',
        publication_year=2019,
        image_url='https://m.media-amazon.com/images/I/41PuVgIcaqL._AC_SR400,600_AGcontrast_.jpg',
        genre_id=8,  # Historical-Fiction
        user_id=2,
        reviews=[]
    ),
    Book(
        title='An American Marriage',
        author='Tayari Jones',
        description='This novel examines the impact of a wrongful imprisonment on a couple’s marriage. It explores themes of racial injustice, love, and the struggles of rebuilding life after a devastating injustice.',
        publication_year=2018,
        image_url='https://target.scene7.com/is/image/Target/GUEST_451452ba-0fcf-4c8a-b038-b21bec5c5988?qlt=65&fmt=pjpeg&hei=350&wid=350',
        genre_id=1,  # Fiction
        user_id=1,
        reviews=[]
    ),
    Book(
        title='The Seven Husbands of Evelyn Hugo',
        author='Taylor Jenkins Reid',
        description='A novel about a Hollywood icon who recounts her glamorous and tumultuous life. Hollywood icon Evelyn Hugo recounts her glamorous and tumultuous life, including her seven marriages. This novel explores themes of fame, love, and the price of living a life in the public eye.',
        publication_year=2017,
        image_url='https://target.scene7.com/is/image/Target/GUEST_5f3347cc-0259-4710-8d87-072dd8db2637?wid=488&hei=488&fmt=pjpeg',
        genre_id=1,  # Fiction
        user_id=2,
        reviews=[]
    ),
    Book(
        title='The Light We Lost',
        author='Jill Santopolo',
        description='A novel about two people who meet on September 11 and their complicated love story. It follows the story of Lucy and Gabe, who meet on September 11, 2001. Their intense and complex love story spans over a decade, revealing the choices and circumstances that shape their lives and relationship.',
        publication_year=2017,
        image_url='https://static-ppimages.freetls.fastly.net/nielsens/9780008224608.jpg?canvas=363,600&fit=bounds&height=600&mode=max&width=363&404=default.jpg',
        genre_id=7,  # Romance
        user_id=1,
        reviews=[]
    ),
    Book(
        title='The Woman in the Window',
        author='A.J. Finn',
        description='Anna Fox, an agoraphobic woman, believes she has witnessed a crime in her neighbor\'s house. This psychological thriller delves into her fractured reality and the suspenseful unraveling of the truth.',
        publication_year=2018,
        image_url='https://target.scene7.com/is/image/Target/GUEST_c600dff6-1ab7-49b4-9b7f-5ce5edb8c95c?wid=488&hei=488&fmt=pjpeg',
        genre_id=12,  # Thriller
        user_id=2,
        reviews=[]
    ),
    Book(
        title='The Goldfinch',
        author='Donna Tartt',
        description='A Pulitzer Prize-winning novel about a young boy’s journey through life after a tragic event. After surviving a terrorist attack at an art museum, young Theo Decker finds himself in possession of a priceless painting. The novel explores his journey through grief, addiction, and the impact of the painting on his life.',
        publication_year=2013,
        image_url='https://kibangabooks.com/wp-content/uploads/2023/11/The-Goldfinch-book-by-Author-Donna-Tartt1680419018.jpg',
        genre_id=1,  # Fiction
        user_id=1,
        reviews=[]
    ),
    Book(
        title='Big Little Lies',
        author='Liane Moriarty',
        description='This novel follows three women whose seemingly perfect lives are shattered by a murder investigation. It explores themes of friendship, secrets, and the complexities of family life.',
        publication_year=2014,
        image_url='https://images-eu.ssl-images-amazon.com/images/I/81N+sjNpGML._AC_UL600_SR600,600_.jpg',
        genre_id=1,  # Fiction
        user_id=2,
        reviews=[]
    ),
    Book(
        title='The Da Vinci Code',
        author='Dan Brown',
        description='A gripping biographical thriller featuring Robert Langdon, who uncovers a conspiracy hidden in the works of Leonardo da Vinci. The novel blends historical intrigue with modern-day suspense.',
        publication_year=2003,
        image_url='https://kibangabooks.com/wp-content/uploads/2023/11/The-Da-Vinci-Code-Robert-Langdon-Book-2-book-by-Dan-Brown1697023268.jpg',
        genre_id=12,  # Thriller
        user_id=2,
        reviews=[]
    ),
        Book(
        title='The Night Circus',
        author='Erin Morgenstern',
        description='This fantasy novel centers on a magical competition between two young illusionists. Set in an enchanting circus that appears without warning, the story unfolds with a blend of romance, magic, and mystery.',
        publication_year=2011,
        image_url='https://target.scene7.com/is/image/Target/GUEST_62866000-6385-49c7-8ee8-4206e17e621a?wid=488&hei=488&fmt=pjpeg',
        genre_id=4,  # Fantasy
        user_id=2,
        reviews=[]
    ),
    Book(
        title='The House in the Cerulean Sea',
        author='TJ Klune',
        description='A fantasy novel about a caseworker who investigates an orphanage for magical children. A caseworker for magical children is sent to investigate an orphanage that houses some of the most extraordinary children. The novel is a heartwarming tale about acceptance, love, and the importance of family.',
        publication_year=2020,
        image_url='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1569514209l/45047384._SY475_.jpg',
        genre_id=4,  # Fantasy
        user_id=2,
        reviews=[]
    ),
    Book(
        title='Mexican Gothic',
        author='Silvia Moreno-Garcia',
        description='A horror novel about a woman who travels to a remote Mexican town to uncover dark secrets. Set in a remote Mexican town, this horror novel follows Noemí Taboada as she investigates her cousin\'s disturbing experiences in her new home. The story combines Gothic horror with Mexican folklore.',
        publication_year=2020,
        image_url='https://static.fnac-static.com/multimedia/Images/FR/NR/91/f6/ce/13563537/1540-1/tsp20231027075821/Mexican-Gothic.jpg',
        genre_id=12,  # Thriller
        user_id=1,
        reviews=[]
    ),
    Book(
        title='Such a Fun Age',
        author='Kiley Reid',
        description='A novel about a young black woman and the complexities of race and privilege. A young black babysitter’s encounter with a white woman leads to a series of events that explore themes of race, privilege, and the complexities of modern relationships.',
        publication_year=2019,
        image_url='https://target.scene7.com/is/image/Target/GUEST_c4652702-eddd-40a9-8038-e401257bf2e8?wid=488&hei=488&fmt=pjpeg',
        genre_id=1,  # Fiction
        user_id=2,
        reviews=[]
    ),
    Book(
        title='The Shadow of the Wind',
        author='Carlos Ruiz Zafón',
        description='Set in post-war Barcelona, this novel follows a boy named Daniel who discovers a mysterious book by Julián Carax. As he grows up, he uncovers dark secrets about the author and his own family.',
        publication_year=2001,
        image_url='https://dl.bibliofile.ir/2022/01/Download-The-Shadow-Of-The-Wind-by-Carlos-Ruiz-Zafon.jpg',
        genre_id=1,  # Fiction
        user_id=1,
        reviews=[]
    ),

    Book(
        title='The Road',
        author='Cormac McCarthy',
        description='In a desolate, post-apocalyptic world, a father and son journey through a bleak landscape, struggling to survive. The novel is a powerful exploration of love, hope, and the bond between parent and child.',
        publication_year=2006,
        image_url='https://target.scene7.com/is/image/Target/GUEST_b68dea5d-a670-4d91-9dc4-7a6122403077?wid=488&hei=488&fmt=pjpeg',
        genre_id=1,  # Fiction
        user_id=1,
        reviews=[]
    ),
    Book(
        title='The Book Thief',
        author='Markus Zusak',
        description='Narrated by Death, this novel follows Liesel Meminger, a young girl living in Nazi Germany. It tells her story of finding solace in stealing books and the impact of her actions on those around her.',
        publication_year=2005,
        image_url='https://1.bp.blogspot.com/-yMhFM7GOlJs/TV64loYmkII/AAAAAAAABGU/x1NZXPgRVXQ/s320/51aLMdFaW1L._SS500_.jpg',
        genre_id=1,  # Fiction
        user_id=2,
        reviews=[]
    ),
        Book(
        title="Harry Potter and the Philosopher's Stone",
        author='J.K. Rowling',
        description='The first book in the Harry Potter series introduces Harry, a young wizard who discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry. It’s a tale of friendship, adventure, and the battle between good and evil.',
        publication_year=1997,
        image_url='https://www.jkrowling.com/wp-content/uploads/2016/10/HPATPS_Hero_OnGrey.png',
        genre_id=11,  # Children's
        user_id=1,
        reviews=[]
    ),
    Book(
        title='Gone Girl',
        author='Gillian Flynn',
        description='This psychological thriller centers on the disappearance of Amy Dunne and the media frenzy that ensues. The story explores the complexities of marriage and the darker sides of human nature.',
        publication_year=2012,
        image_url='https://target.scene7.com/is/image/Target/GUEST_c51db5e6-0005-4da6-bdaf-2a4028a698fd?wid=488&hei=488&fmt=pjpeg',
        genre_id=12,  # Thriller
        user_id=2,
        reviews=[]
    ),
    Book(
        title='Salt, Fat, Acid, Heat',
        author='Samin Nosrat',
        description='A groundbreaking cookbook that focuses on the essential elements of cooking: salt, fat, acid, and heat. It offers practical advice and recipes that highlight the importance of these elements in creating delicious food.',
        publication_year=2017,
        image_url='https://images.food52.com/RfRXNAzB1bBeCcsElTO3wn9bx0g=/340x416/ce6ed4b5-bd15-4540-8e9d-1c5d171f686a--2018-0206_salt-fat-acid-heat-cover_silo_ty-mecham_002.jpg',
        genre_id=10,  # Cookbook
        user_id=1,
        reviews=[]
    ),
    Book(
        title='Sapiens: A Brief History of Humankind',
        author='Yuval Noah Harari',
        description='This non-fiction work provides an overview of human history, from the emergence of Homo sapiens to the present day. It explores the impact of our species on the world and our evolution as a society.',
        publication_year=2011,
        image_url='https://www.marlowesbooks.com/assets/thumbL/195427.jpg?20221129113642',
        genre_id=2,  # Non-Fiction (History)
        user_id=2,
        reviews=[]
    ),
    Book(
        title='Into the Wild',
        author='Jon Krakauer',
        description='The true story of Christopher McCandless, a young man who ventured into the Alaskan wilderness seeking meaning and adventure. It’s a poignant exploration of his journey and the allure of the wild.',
        publication_year=1996,
        image_url='https://www.seachest.co.uk/image_resize/w555/h555/products/img_Into+The+Wild.jpg',
        genre_id=9,  # Adventure
        user_id=1,
        reviews=[]
    ),
    Book(
        title='The Diary of a Young Girl',
        author='Anne Frank',
        description='The diary of Anne Frank, a Jewish girl in hiding during World War II, provides a powerful and intimate account of her life and thoughts while she and her family lived in secret to avoid Nazi persecution.',
        publication_year=1947,
        image_url='https://5.imimg.com/data5/JJ/FH/MY-37267076/the-diary-of-a-young-girl-x-class-book-500x500.jpg',
        genre_id=6,  # Biography
        user_id=2,
        reviews=[]
    ),
]

def seed():
    db.drop_all()
    db.create_all()

    # Seed genres
    genres = [
        Genre(name='Fiction'),
        Genre(name='Non-Fiction'),
        Genre(name='Science-Fiction'),
        Genre(name='Fantasy'),
        Genre(name='Mystery'),
        Genre(name='Biography'),
        Genre(name='Romance'),
        Genre(name='Historical-Fiction'),
        Genre(name='Adventure'),
        Genre(name='Cookbook'),
        Genre(name='Children\'s'),
        Genre(name='Thriller'),
    ]
    
    db.session.bulk_save_objects(genres)
    db.session.commit()
    
    # Seed books
    db.session.bulk_save_objects(book_entries)
    db.session.commit()

if __name__ == "__main__":
    with app.app_context():
        seed()
