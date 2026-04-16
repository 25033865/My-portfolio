
console.log('Welcome to Mudau Rotondwa Agriment\'s portfolio');

const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;

    cursor.style.left = (cursorX - 6) + 'px';
    cursor.style.top = (cursorY - 6) + 'px';

    requestAnimationFrame(animateCursor);
}

animateCursor();

setInterval(() => {
    if (Math.abs(mouseX - followerX) > 1 || Math.abs(mouseY - followerY) > 1) {
        followerX += (mouseX - followerX) * 0.3;
        followerY += (mouseY - followerY) * 0.3;
        
        cursorFollower.style.left = (followerX - 15) + 'px';
        cursorFollower.style.top = (followerY - 15) + 'px';
    }
}, 16);

let isScrolling = false;
window.addEventListener('scroll', () => {
    isScrolling = true;
    cursor.style.boxShadow = '0 0 20px rgba(102, 217, 255, 0.9), 0 0 30px rgba(0, 136, 255, 0.5)';
    cursorFollower.style.borderColor = '#66d9ff';
    cursorFollower.style.boxShadow = 'inset 0 0 15px rgba(102, 217, 255, 0.5), 0 0 10px rgba(0, 136, 255, 0.4)';
    
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
        isScrolling = false;
        cursor.style.boxShadow = '0 0 10px rgba(102, 217, 255, 0.6)';
        cursorFollower.style.borderColor = '#0088ff';
        cursorFollower.style.boxShadow = 'inset 0 0 10px rgba(0, 136, 255, 0.3)';
    }, 150);
});
document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.classList.contains('project-link')) {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.3)';
        cursorFollower.style.borderColor = '#ffffff';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.classList.contains('project-link')) {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
        cursorFollower.style.borderColor = '#0088ff';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const businessCard = document.querySelector('.business-card');
    
    if (businessCard) {
        const cardInner = businessCard.querySelector('.card-inner');

        businessCard.addEventListener('click', function() {
            cardInner.style.transform = '';
            cardInner.style.transition = '';
            this.classList.toggle('flipped');
        });

        businessCard.addEventListener('mousemove', function(e) {
            if (this.classList.contains('flipped')) return;
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 8;
            const rotateY = (centerX - x) / 8;

            cardInner.style.transition = 'transform 0.1s ease-out';
            cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03) translateZ(25px)`;
        });

        businessCard.addEventListener('mouseleave', function() {
            if (this.classList.contains('flipped')) return;
            cardInner.style.transition = 'transform 0.5s ease-out';
            cardInner.style.transform = '';
        });
        
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    targetSection.style.animation = 'none';
                    setTimeout(() => {
                        targetSection.style.animation = 'pulse 0.6s ease-out';
                    }, 10);
                }
            });
        });
    }
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeIn 0.6s ease-out';
            }
        });
    }, observerOptions);
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((skill) => {
        skill.addEventListener('mouseover', function() {
            this.style.transform = 'translateX(10px) scale(1.03)';
        });
        
        skill.addEventListener('mouseout', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
    
    const projects = document.querySelectorAll('.project-item');
    projects.forEach((project) => {
        project.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 12px 25px rgba(0, 136, 255, 0.35)';
        });
        
        project.addEventListener('mouseout', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 136, 255, 0.15)';
        });
    });
    
    const educationItems = document.querySelectorAll('.education-item');
    educationItems.forEach((item) => {
        item.addEventListener('mouseover', function() {
            this.style.transform = 'translateX(3px)';
        });
        
        item.addEventListener('mouseout', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item) => {
        item.addEventListener('mouseover', function() {
            this.style.transform = 'translateX(3px)';
        });
        
        item.addEventListener('mouseout', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    const headings = document.querySelectorAll('h2, h3');
    headings.forEach(heading => {
        heading.addEventListener('mouseover', function() {
            this.style.color = '#ffffff';
            this.style.transform = 'translateX(5px)';
        });
        
        heading.addEventListener('mouseout', function() {
            if (this.tagName === 'H2') {
                this.style.color = '#66d9ff';
            }
            this.style.transform = 'translateX(0)';
        });
    });

    const openCalculatorButton = document.getElementById('open-calculator');
    const calculatorModal = document.getElementById('calculator-modal');
    const closeCalculatorButton = document.getElementById('close-calculator');
    const calculatorDisplay = document.getElementById('calculator-display');
    const calculatorKeys = document.querySelectorAll('.calculator-key');

    if (openCalculatorButton && calculatorModal && closeCalculatorButton && calculatorDisplay) {
        let expression = '';
        const operators = new Set(['+', '-', '×', '÷', '*', '/']);

        function updateCalculatorDisplay(value) {
            calculatorDisplay.value = value || '0';
        }

        function normalizeExpression(value) {
            return value.replace(/×/g, '*').replace(/÷/g, '/');
        }

        function isValidExpression(value) {
            return /^[0-9+\-*/().\s]+$/.test(value);
        }

        function clearCalculator() {
            expression = '';
            updateCalculatorDisplay('0');
        }

        function backspaceCalculator() {
            if (!expression) return;
            expression = expression.slice(0, -1);
            updateCalculatorDisplay(expression);
        }

        function appendCalculatorValue(value) {
            if (!value) return;

            const lastChar = expression.slice(-1);

            if (value === '.') {
                const currentNumber = expression.split(/[+\-×÷*/()]/).pop();
                if (currentNumber.includes('.')) return;
                if (!currentNumber) {
                    expression += '0.';
                    updateCalculatorDisplay(expression);
                    return;
                }
            }

            if (value === '(') {
                if (expression && /[0-9.)]/.test(lastChar)) {
                    expression += '×';
                }
                expression += value;
                updateCalculatorDisplay(expression);
                return;
            }

            if (value === ')') {
                const openCount = (expression.match(/\(/g) || []).length;
                const closeCount = (expression.match(/\)/g) || []).length;
                if (openCount <= closeCount || !expression || operators.has(lastChar) || lastChar === '(') {
                    return;
                }
                expression += value;
                updateCalculatorDisplay(expression);
                return;
            }

            if (operators.has(value)) {
                if (!expression) {
                    if (value === '-') {
                        expression = value;
                        updateCalculatorDisplay(expression);
                    }
                    return;
                }

                if (operators.has(lastChar)) {
                    expression = expression.slice(0, -1) + value;
                    updateCalculatorDisplay(expression);
                    return;
                }
            }

            expression += value;
            updateCalculatorDisplay(expression);
        }

        function evaluateExpression() {
            if (!expression) return;

            const normalized = normalizeExpression(expression);
            const openCount = (normalized.match(/\(/g) || []).length;
            const closeCount = (normalized.match(/\)/g) || []).length;

            if (!isValidExpression(normalized) || openCount !== closeCount) {
                updateCalculatorDisplay('Error');
                expression = '';
                return;
            }

            try {
                const result = Function(`"use strict"; return (${normalized});`)();
                if (!Number.isFinite(result)) {
                    throw new Error('Invalid result');
                }
                expression = Number(result.toPrecision(12)).toString();
                updateCalculatorDisplay(expression);
            } catch (error) {
                updateCalculatorDisplay('Error');
                expression = '';
            }
        }

        function openCalculator() {
            calculatorModal.classList.add('open');
            calculatorModal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('modal-open');
            updateCalculatorDisplay(expression);
        }

        function closeCalculator() {
            calculatorModal.classList.remove('open');
            calculatorModal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('modal-open');
        }

        openCalculatorButton.addEventListener('click', function(e) {
            e.preventDefault();
            openCalculator();
        });

        closeCalculatorButton.addEventListener('click', function() {
            closeCalculator();
        });

        calculatorModal.addEventListener('click', function(e) {
            if (e.target === calculatorModal) {
                closeCalculator();
            }
        });

        calculatorKeys.forEach((key) => {
            key.addEventListener('click', function() {
                const action = this.dataset.action;
                const value = this.dataset.value;

                if (action === 'clear') {
                    clearCalculator();
                    return;
                }

                if (action === 'backspace') {
                    backspaceCalculator();
                    return;
                }

                if (action === 'equals') {
                    evaluateExpression();
                    return;
                }

                appendCalculatorValue(value);
            });
        });

        document.addEventListener('keydown', function(e) {
            if (!calculatorModal.classList.contains('open')) return;

            if (e.key === 'Escape') {
                closeCalculator();
                return;
            }

            if (e.key === 'Enter' || e.key === '=') {
                e.preventDefault();
                evaluateExpression();
                return;
            }

            if (e.key === 'Backspace') {
                e.preventDefault();
                backspaceCalculator();
                return;
            }

            if (e.key === 'Delete') {
                e.preventDefault();
                clearCalculator();
                return;
            }

            if (/^[0-9.+\-*/()]$/.test(e.key)) {
                e.preventDefault();
                const keyMap = {
                    '*': '×',
                    '/': '÷'
                };
                appendCalculatorValue(keyMap[e.key] || e.key);
            }
        });
    }
});
