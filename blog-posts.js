const blogPosts = [
    {
        id: 'german-grammar-basics',
        title: 'German Grammar Basics: Der, Die, Das Explained',
        category: 'Grammar',
        author: 'Sebastian Gabriel',
        date: 'January 15, 2025',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        excerpt: 'Master the German articles der, die, das with our comprehensive guide. Learn the rules, exceptions, and practical tips for remembering them.',
        content: `
            <h2>Understanding German Articles</h2>
            <p>German articles are one of the first challenges students face when learning the language. Unlike English, which only has "the," German has three definite articles: der, die, and das.</p>
            
            <h3>The Three Articles</h3>
            <ul>
                <li><strong>der</strong> - masculine (der Mann, der Tisch)</li>
                <li><strong>die</strong> - feminine (die Frau, die Tür)</li>
                <li><strong>das</strong> - neuter (das Kind, das Buch)</li>
            </ul>
            
            <h3>Basic Rules</h3>
            <p>While there are many exceptions, here are some general patterns:</p>
            <ul>
                <li>Most words ending in -ung, -heit, -keit are feminine (die)</li>
                <li>Most words ending in -er, -en are masculine (der)</li>
                <li>Most words ending in -chen, -lein are neuter (das)</li>
            </ul>
            
            <h3>Practice Tips</h3>
            <p>Always learn new vocabulary with its article. Don't just memorize "Tisch" but "der Tisch." This will help you internalize the gender patterns naturally.</p>
        `
    },
    {
        id: 'german-culture-traditions',
        title: 'German Culture: Traditions and Customs You Should Know',
        category: 'Culture',
        author: 'Anna Müller',
        date: 'January 12, 2025',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        excerpt: 'Discover the rich traditions and customs of German culture. From Oktoberfest to Christmas markets, learn about the cultural context that makes German language learning more meaningful.',
        content: `
            <h2>German Cultural Traditions</h2>
            <p>Understanding German culture is essential for mastering the language. Here are some key traditions and customs:</p>
            
            <h3>Oktoberfest</h3>
            <p>The world's largest beer festival takes place in Munich every year. It's a celebration of Bavarian culture with traditional music, food, and of course, beer.</p>
            
            <h3>Christmas Markets</h3>
            <p>Weihnachtsmärkte are magical winter markets that appear in cities across Germany. They feature handmade crafts, traditional foods, and warm Glühwein.</p>
            
            <h3>Karneval</h3>
            <p>Especially popular in Cologne and Düsseldorf, Karneval is a time of celebration before Lent, featuring parades, costumes, and parties.</p>
            
            <h3>Cultural Etiquette</h3>
            <ul>
                <li>Always say "Guten Tag" when entering a shop</li>
                <li>Be punctual - Germans value time</li>
                <li>Separate waste for recycling</li>
                <li>Don't jaywalk - follow traffic rules</li>
            </ul>
        `
    },
    {
        id: 'business-german-tips',
        title: 'Business German: Essential Phrases for Professional Communication',
        category: 'Business',
        author: 'Tobias Weber',
        date: 'January 10, 2025',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        excerpt: 'Master professional German communication with these essential business phrases and etiquette tips for meetings, emails, and presentations.',
        content: `
            <h2>Professional German Communication</h2>
            <p>Business German requires a different level of formality and specific vocabulary. Here are the essentials:</p>
            
            <h3>Meeting Phrases</h3>
            <ul>
                <li>"Guten Morgen, vielen Dank für Ihre Zeit" - Good morning, thank you for your time</li>
                <li>"Können wir das Thema wechseln?" - Can we change the topic?</li>
                <li>"Ich bin der Meinung, dass..." - I am of the opinion that...</li>
                <li>"Das ist ein guter Punkt" - That's a good point</li>
            </ul>
            
            <h3>Email Etiquette</h3>
            <p>German business emails are typically more formal than English ones:</p>
            <ul>
                <li>Start with "Sehr geehrte Damen und Herren" (Dear Sir/Madam)</li>
                <li>Use "Mit freundlichen Grüßen" (Kind regards) to close</li>
                <li>Be direct and to the point</li>
                <li>Always proofread carefully</li>
            </ul>
            
            <h3>Presentation Language</h3>
            <p>When giving presentations in German:</p>
            <ul>
                <li>"Ich möchte Ihnen heute..." - I would like to present to you today...</li>
                <li>"Wie Sie auf der Folie sehen können..." - As you can see on the slide...</li>
                <li>"Gibt es Fragen?" - Are there any questions?</li>
            </ul>
        `
    },
    {
        id: 'german-pronunciation-guide',
        title: 'German Pronunciation: Master the Sounds',
        category: 'Pronunciation',
        author: 'Sebastian Gabriel',
        date: 'January 8, 2025',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        excerpt: 'Improve your German pronunciation with our comprehensive guide to German sounds, including umlauts, consonant combinations, and stress patterns.',
        content: `
            <h2>German Pronunciation Essentials</h2>
            <p>German pronunciation can be challenging, but with practice, you can master it. Here's your guide to the most important sounds:</p>
            
            <h3>Umlauts</h3>
            <ul>
                <li><strong>ä</strong> - sounds like "eh" in "bed" (Bär, Mädchen)</li>
                <li><strong>ö</strong> - sounds like "er" in "her" (schön, können)</li>
                <li><strong>ü</strong> - sounds like "ee" with rounded lips (über, müssen)</li>
            </ul>
            
            <h3>Consonant Combinations</h3>
            <ul>
                <li><strong>ch</strong> - soft "h" sound (ich, nicht)</li>
                <li><strong>sch</strong> - "sh" sound (Schule, Tisch)</li>
                <li><strong>sp</strong> - "shp" sound (sprechen, Sport)</li>
                <li><strong>st</strong> - "sht" sound (stehen, Stadt)</li>
            </ul>
            
            <h3>Stress Patterns</h3>
            <p>German words typically stress the first syllable, but there are exceptions:</p>
            <ul>
                <li>Most German words: stress on first syllable</li>
                <li>Words ending in -tion: stress on the syllable before -tion</li>
                <li>Compound words: stress on the first part</li>
            </ul>
            
            <h3>Practice Tips</h3>
            <p>Listen to native speakers, repeat after them, and don't be afraid to exaggerate the sounds at first. Practice makes perfect!</p>
        `
    },
    {
        id: 'german-vocabulary-building',
        title: 'Building Your German Vocabulary: Effective Strategies',
        category: 'Vocabulary',
        author: 'Anna Müller',
        date: 'January 5, 2025',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        excerpt: 'Discover proven strategies for expanding your German vocabulary efficiently. From flashcards to context learning, find the method that works best for you.',
        content: `
            <h2>Effective Vocabulary Building Strategies</h2>
            <p>Building vocabulary is crucial for German language fluency. Here are proven strategies:</p>
            
            <h3>Context Learning</h3>
            <p>Learn words in context rather than in isolation:</p>
            <ul>
                <li>Read German texts and note new words</li>
                <li>Learn words that appear together (collocations)</li>
                <li>Use new words in sentences immediately</li>
            </ul>
            
            <h3>Spaced Repetition</h3>
            <p>Use flashcards with spaced repetition:</p>
            <ul>
                <li>Review words at increasing intervals</li>
                <li>Focus more on difficult words</li>
                <li>Use apps like Anki or Quizlet</li>
            </ul>
            
            <h3>Word Families</h3>
            <p>Learn related words together:</p>
            <ul>
                <li>fahren (to drive) → Fahrer (driver) → Fahrt (trip)</li>
                <li>arbeiten (to work) → Arbeit (work) → Arbeiter (worker)</li>
            </ul>
            
            <h3>Active Usage</h3>
            <p>Don't just recognize words - use them:</p>
            <ul>
                <li>Write sentences with new vocabulary</li>
                <li>Practice speaking with a partner</li>
                <li>Keep a vocabulary journal</li>
            </ul>
        `
    },
    {
        id: 'german-learning-mistakes',
        title: 'Common German Learning Mistakes and How to Avoid Them',
        category: 'Tips',
        author: 'Tobias Weber',
        date: 'January 3, 2025',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        excerpt: 'Learn from common mistakes German learners make. Avoid these pitfalls and accelerate your learning progress with our expert tips.',
        content: `
            <h2>Common German Learning Mistakes</h2>
            <p>Every German learner makes mistakes, but learning from common errors can accelerate your progress:</p>
            
            <h3>Grammar Mistakes</h3>
            <ul>
                <li><strong>Word order:</strong> Don't translate English word order directly</li>
                <li><strong>Cases:</strong> Learn the four cases (Nominativ, Akkusativ, Dativ, Genitiv)</li>
                <li><strong>Articles:</strong> Always learn nouns with their articles</li>
            </ul>
            
            <h3>Pronunciation Mistakes</h3>
            <ul>
                <li><strong>Umlauts:</strong> Don't ignore ä, ö, ü - they change meaning</li>
                <li><strong>Consonants:</strong> Practice ch, sch, sp, st sounds</li>
                <li><strong>Stress:</strong> German stress patterns differ from English</li>
            </ul>
            
            <h3>Cultural Mistakes</h3>
            <ul>
                <li><strong>Formality:</strong> Use Sie with strangers and superiors</li>
                <li><strong>Punctuality:</strong> Germans value being on time</li>
                <li><strong>Directness:</strong> Germans are more direct than English speakers</li>
            </ul>
            
            <h3>Learning Strategy Mistakes</h3>
            <ul>
                <li>Focusing only on grammar without speaking practice</li>
                <li>Learning isolated words without context</li>
                <li>Being afraid to make mistakes</li>
            </ul>
        `
    }
];

// Function to open blog modal
function openBlogModal(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'blog-modal';
    modal.innerHTML = `
        <div class="blog-modal-overlay">
            <div class="blog-modal-content">
                <button class="blog-modal-close">
                    <i class="fas fa-times"></i>
                </button>
                <div class="blog-modal-header">
                    <div class="blog-modal-meta">
                        <span class="blog-modal-category">${post.category}</span>
                        <span class="blog-modal-date">${post.date}</span>
                    </div>
                    <h1 class="blog-modal-title">${post.title}</h1>
                    <p class="blog-modal-author">By ${post.author}</p>
                </div>
                <div class="blog-modal-image">
                    <img src="${post.image}" alt="${post.title}">
                </div>
                <div class="blog-modal-body">
                    ${post.content}
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Close modal events
    modal.querySelector('.blog-modal-close').addEventListener('click', () => {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    });

    modal.querySelector('.blog-modal-overlay').addEventListener('click', (e) => {
        if (e.target === modal.querySelector('.blog-modal-overlay')) {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        }
    });

    // Escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}
