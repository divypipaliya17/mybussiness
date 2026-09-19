:root {
    --bg-dark: #070a12;
    --card-bg: rgba(255, 255, 255, 0.04);
    --card-border: rgba(255, 255, 255, 0.1);
    --primary-glow: #6366f1;
    --secondary-glow: #a855f7;
    --accent-cyan: #06b6d4;
    --text-main: #f3f4f6;
    --text-muted: #9ca3af;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-main);
    overflow-x: hidden;
    position: relative;
}

/* Background Animated Canvas */
#bgCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    pointer-events: none;
}

/* Glowing Dynamic Blobs */
.blob {
    position: fixed;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    filter: blur(150px);
    z-index: -1;
    opacity: 0.35;
    animation: floatBlob 10s infinite alternate ease-in-out;
}

.blob-1 { background: var(--primary-glow); top: -100px; left: -100px; }
.blob-2 { background: var(--secondary-glow); bottom: -100px; right: -100px; animation-delay: -5s; }

@keyframes floatBlob {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(60px, 80px) scale(1.1); }
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8%;
    background: rgba(7, 10, 18, 0.75);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--card-border);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo { font-size: 1.6rem; font-weight: 800; letter-spacing: -0.5px; }
.logo-icon { color: var(--accent-cyan); margin-right: 8px; }
.highlight { color: var(--primary-glow); }

.nav-links { display: flex; list-style: none; gap: 25px; }
.nav-links a { color: var(--text-muted); text-decoration: none; font-weight: 600; transition: 0.3s; }
.nav-links a:hover { color: var(--text-main); text-shadow: 0 0 10px rgba(255,255,255,0.5); }

/* Buttons */
.btn-primary {
    background: linear-gradient(135deg, var(--primary-glow), var(--secondary-glow));
    color: white;
    padding: 12px 26px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    border: none;
    cursor: pointer;
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.35);
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.btn-primary:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 35px rgba(99, 102, 241, 0.6);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.08);
    color: white;
    padding: 14px 28px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    border: 1px solid var(--card-border);
    backdrop-filter: blur(10px);
    transition: 0.3s;
}

.btn-secondary:hover { background: rgba(255, 255, 255, 0.15); border-color: var(--accent-cyan); }

/* Hero */
.hero { min-height: 88vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 60px 8%; }
.hero-content { max-width: 900px; }
.pulse-badge {
    display: inline-block;
    padding: 8px 18px;
    background: rgba(6, 182, 212, 0.1);
    border: 1px solid var(--accent-cyan);
    border-radius: 20px;
    font-size: 0.88rem;
    color: var(--accent-cyan);
    margin-bottom: 20px;
    box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);
}

.hero h1 { font-size: 3.8rem; font-weight: 800; line-height: 1.2; margin-bottom: 20px; }
.gradient-text { background: linear-gradient(135deg, #06b6d4, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.hero p { font-size: 1.2rem; color: var(--text-muted); margin-bottom: 35px; }
.hero-btns { display: flex; justify-content: center; gap: 20px; margin-bottom: 55px; flex-wrap: wrap; }

/* Stats Bar */
.stats-container { display: flex; justify-content: space-around; gap: 20px; flex-wrap: wrap; }
.stat-card { background: var(--card-bg); border: 1px solid var(--card-border); backdrop-filter: blur(16px); padding: 22px 40px; border-radius: 20px; min-width: 180px; }
.stat-card h2 { font-size: 2.2rem; color: var(--accent-cyan); }

/* Social Proof */
.social-proof { text-align: center; padding: 40px 8%; background: rgba(0,0,0,0.3); }
.trust-title { font-size: 0.85rem; letter-spacing: 2px; color: var(--text-muted); margin-bottom: 25px; }
.logos-grid { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; font-size: 1.2rem; font-weight: 600; color: var(--text-muted); }
.logo-item i { color: var(--accent-cyan); margin-right: 8px; }

/* Cards & Grid */
.services, .case-studies, .testimonials, .pricing { padding: 90px 8%; }
.section-header { text-align: center; margin-bottom: 50px; }
.section-header h2 { font-size: 2.6rem; margin-bottom: 10px; }
.services-grid, .results-grid, .testimonials-grid, .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }

.glass-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    backdrop-filter: blur(20px);
    padding: 35px;
    border-radius: 24px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.animated-hover:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: var(--primary-glow);
    box-shadow: 0 15px 35px rgba(99, 102, 241, 0.25);
}

.card-icon { font-size: 2.5rem; color: var(--accent-cyan); margin-bottom: 20px; }

/* Calculator */
.calculator-section { padding: 90px 8%; }
.glass-container { background: var(--card-bg); border: 1px solid var(--card-border); backdrop-filter: blur(20px); padding: 50px; border-radius: 28px; max-width: 900px; margin: 0 auto; }
.calc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
@media(max-width: 768px) { .calc-grid { grid-template-columns: 1fr; } }
.calc-inputs label { display: block; margin-bottom: 10px; font-weight: 600; }
.calc-inputs input[type="range"] { width: 100%; margin-bottom: 25px; accent-color: var(--accent-cyan); }
.styled-select { width: 100%; padding: 14px; background: rgba(0,0,0,0.5); border: 1px solid var(--card-border); color: white; border-radius: 12px; }
.calc-results { text-align: center; }
.roi-number { font-size: 3.2rem; font-weight: 800; color: var(--accent-cyan); margin: 15px 0; text-shadow: 0 0 20px rgba(6, 182, 212, 0.4); }

/* Case Studies */
.case-badge { display: inline-block; background: rgba(6, 182, 212, 0.2); color: var(--accent-cyan); padding: 4px 14px; border-radius: 12px; font-size: 0.8rem; margin-bottom: 15px; }
.result-stats { display: flex; gap: 30px; margin: 20px 0; }
.result-stats h4 { font-size: 1.8rem; color: #22c55e; }

/* Audit Section */
.audit-section { padding: 70px 8%; }
.audit-card { text-align: center; }
.audit-form { display: flex; gap: 15px; margin-top: 25px; flex-wrap: wrap; justify-content: center; }
.audit-form input { padding: 14px 22px; background: rgba(0,0,0,0.4); border: 1px solid var(--card-border); border-radius: 30px; color: white; flex: 1; min-width: 250px; outline: none; }

/* Testimonials */
.stars { color: #f59e0b; margin-bottom: 15px; }
.client-info { margin-top: 20px; display: flex; flex-direction: column; }
.client-info span { font-size: 0.85rem; color: var(--text-muted); }

/* Pricing */
.price-card { position: relative; text-align: center; }
.featured-card { border-color: var(--primary-glow); box-shadow: 0 0 35px rgba(99, 102, 241, 0.35); }
.popular-tag { position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: var(--secondary-glow); color: white; padding: 4px 18px; border-radius: 20px; font-size: 0.75rem; font-weight: 800; }
.price { font-size: 3rem; font-weight: 800; margin: 20px 0; }
.price span { font-size: 1rem; color: var(--text-muted); }
.price-features { list-style: none; text-align: left; margin: 20px 0; }
.price-features li { margin-bottom: 12px; display: flex; gap: 10px; align-items: center; color: var(--text-muted); }
.price-features i { color: var(--accent-cyan); }

.margin-top { margin-top: 20px; }
.btn-full { width: 100%; justify-content: center; }

/* Contact */
.contact { padding: 90px 8%; display: flex; justify-content: center; }
.contact-card { max-width: 600px; width: 100%; text-align: center; }
.input-group { margin-bottom: 20px; }
.input-group input, .input-group textarea { width: 100%; padding: 16px; background: rgba(0,0,0,0.4); border: 1px solid var(--card-border); border-radius: 12px; color: white; font-size: 1rem; outline: none; }

footer { text-align: center; padding: 35px; border-top: 1px solid var(--card-border); color: var(--text-muted); font-size: 0.9rem; }
