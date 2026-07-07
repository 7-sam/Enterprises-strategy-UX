/**
 * Enterprise UX Strategy Case Study Application Engine
 * Renders interactive states, handles Figma Canvas mode panning/zooming,
 * and maintains the presentation slide state.
 */

// ==========================================================================
// STRATEGIC INSIGHTS CONTENT REPOSITORY
// ==========================================================================
const STRATEGY_RESOURCES = {
    1: {
        title: "Strategic Overview",
        subtitle: "Enterprise UX Strategy Case Study",
        sections: [
            {
                heading: "Problem Context",
                text: "Enterprise tools are historically built for functionality, leaving usability, task efficiency, and user delight behind. This case study details our strategy to overhaul the AeroFlow SaaS platform—a complex operations and analytics engine."
            },
            {
                heading: "UX Vision Statement",
                text: "Create a modern, unified hub that lowers user cognitive load, optimizes click paths for high-frequency operations, and provides executives with clear, real-time business health insights."
            },
            {
                heading: "Strategy Phases Covered",
                text: "1. Audit (Audit legacy bottlenecks)\n2. Research (Align stakeholder expectations)\n3. Architecture (Restructure information paths)\n4. Design (Low-fi and High-fi design systems)\n5. Launch (Engineer & optimize implementation)"
            }
        ],
        kpis: {
            title: "Overall Project Target KPIs",
            desc: "Redesign benchmarks aim for: 40% reduction in user task completion times, a 50% drop in user training hours, and a System Usability Scale (SUS) score above 80."
        }
    },
    2: {
        title: "01. Business Audit",
        subtitle: "Identifying System Friction Points",
        sections: [
            {
                heading: "Methodology",
                text: "We conducted a 3-week operational audit. This included tracking user clicks, counting tool switching frequencies, and calculating the time wasted during manual handoffs between siloed portals."
            },
            {
                heading: "The Root Causes of friction",
                text: "Legacy enterprise portals are built in silos. A simple dispatch ticket workflow required workers to copy and paste keys across 4 different browser tabs, compounding data entry risks."
            },
            {
                heading: "Action Plan",
                text: "Consolidate the legacy portals into a single unified workspace. Automate redundant entries and promote action priorities to the front page using dynamic visual badges."
            }
        ],
        kpis: {
            title: "Financial Impact Targets",
            desc: "Legacy friction incurs an estimated $1.2k per worker annually in training and operational lag. Fixing these core vectors directly impacts department margins."
        }
    },
    3: {
        title: "02. Stakeholder Mapping",
        subtitle: "Ecosystem Alignment & Synergy",
        sections: [
            {
                heading: "Alignment Strategy",
                text: "Clicking on any stakeholder card highlights their position in the ecosystem. Enterprise systems fail when design ignores the conflicting needs of key actors: security compliance vs. worker velocity."
            },
            {
                heading: "Primary Conflict Resolvers",
                text: "• Executive Sponsor needs system consolidation and compliance safety.\n• IT Teams demand strict security API constraints.\n• Operations Teams want speed and automated tasks. Our UI design bridges these needs, keeping tasks fast yet compliant."
            },
            {
                heading: "Influence vs. Interest",
                text: "High-influence stakeholders (Executive, IT, Ops Managers) dictate the features, while daily employees shape the interaction details (shortcuts, density, layout grid)."
            }
        ],
        kpis: {
            title: "Ecosystem Goal",
            desc: "Achieve 100% buy-in across departments by demonstrating how the new interface satisfies safety policies without slowing down dispatch workers."
        }
    },
    4: {
        title: "02. User Diagnostics",
        subtitle: "Quantitative & Qualitative Results",
        sections: [
            {
                heading: "Research Mix",
                text: "We combined quantitative surveys (N=1,245) with qualitative sessions (45 interviews, 32 usability tests) to build a robust diagnostic score card of legacy tasks."
            },
            {
                heading: "Task Usability Scores",
                text: "Legacy reporting modules scored a critical 31% task success rate, while teamwork workflows hovered at 22%. Users abandoned tasks, relying on custom spreadsheets instead."
            },
            {
                heading: "Core Insight",
                text: "The primary source of drop-offs is poor layout hierarchy. Workers are overwhelmed by raw database grids. They lack key visual signals telling them which data requires attention."
            }
        ],
        kpis: {
            title: "Success Benchmarks",
            desc: "Redesign metrics target a 2.5x increase in reporting success and a 3x increase in team collaboration metrics by introducing inline updates and alerts."
        }
    },
    5: {
        title: "02. Target User Personas",
        subtitle: "Structuring Empathy and Context",
        sections: [
            {
                heading: "Operational Variance",
                text: "We mapped three primary personas representing diverse skill levels: Sarah (VP/Ops), Michael (Warehouse Lead), and David (VP/Logistics)."
            },
            {
                heading: "Aesthetic Density Options",
                text: "Different personas need different levels of detail. Daily operators (Michael) need a dense interface with keyboard shortcuts, while executives (David) prefer visual summaries."
            },
            {
                heading: "Key Strategy Decision",
                text: "We designed a density toggle in the settings. This lets users switch between a 'Compact' grid for fast operation and a 'Comfortable' layout for analysis."
            }
        ],
        kpis: {
            title: "Persona Coverage",
            desc: "Designing for the edge case (the heavy daily operator) ensures the platform is fast enough for power users while remaining clean for executives."
        }
    },
    6: {
        title: "02. User Journey Mapping",
        subtitle: "Pain Points & Opportunities",
        sections: [
            {
                heading: "Journey Stage Breakdown",
                text: "We mapped the workflow journey from initial discovery to daily work, team updates, and reporting. The emotional curve drops during daily operations due to slow loading states."
            },
            {
                heading: "Friction Point Redirection",
                text: "The lowest emotional state (Daily Work) is caused by database freezes on large data queries. We resolved this by implementing smart loading indicators and paginated search filters."
            },
            {
                heading: "Opportunity Highlights",
                text: "Instead of forcing users to export static PNG graphs, we introduced live, shareable dashboard links, improving teamwork metrics during reporting stages."
            }
        ],
        kpis: {
            title: "Target Journey NPS",
            desc: "Targeting a 35-point increase in journey-based Net Promoter Score (NPS) by eliminating screen freezes and layout confusion."
        }
    },
    7: {
        title: "03. Information Architecture",
        subtitle: "Sitemap Consolidation & Navigation",
        sections: [
            {
                heading: "Navigational Restructuring",
                text: "The legacy menu was organized by database tables. We reorganized the sitemap around user tasks: Overview (Dashboard), Query (Analytics), Triage (Operations), and Permissions (Admin Panel)."
            },
            {
                heading: "Flat Hierarchy Design",
                text: "We flattened the navigation hierarchy, ensuring that high-frequency operational views are never more than two clicks away from the dashboard home."
            },
            {
                heading: "Sitemap Rules",
                text: "Standardize naming conventions, consolidate redundant sub-pages, and establish clear roles for settings, notifications, and profile menus."
            }
        ],
        kpis: {
            title: "IA Success Metrics",
            desc: "Redesign paths reduce navigation click counts by 58% on high-frequency workflows, saving workers significant operational time daily."
        }
    },
    8: {
        title: "03. Ideation & Wireframing",
        subtitle: "Low-Fidelity Blueprint Testing",
        sections: [
            {
                heading: "Blueprint Phase Goals",
                text: "We designed wireframes in grayscale. This allowed us to align stakeholders on layout grids, column systems, and main panels without getting distracted by colors."
            },
            {
                heading: "Feedback Triage",
                text: "During wireframe tests, users requested sticky column filters and status badges, helping them organize active dispatch tickets faster."
            },
            {
                heading: "Strategic Iteration",
                text: "We placed yellow annotations directly on wireframe blocks, highlighting key design changes before moving into high-fidelity mockups."
            }
        ],
        kpis: {
            title: "Validation Goal",
            desc: "100% agreement on layout structures across stakeholders prior to starting high-fidelity visual design, preventing costly code refactoring later."
        }
    },
    9: {
        title: "04. High-Fidelity UI",
        subtitle: "Unified Operations Analytics Hub",
        sections: [
            {
                heading: "Design System Aesthetics",
                text: "The high-fidelity UI combines clean backgrounds, emerald green and teal accents, soft shadows, and a 12-column grid system."
            },
            {
                heading: "Interface Features",
                text: "• Sidebar Navigation (collapsible, task-focused)\n• KPI Widget Cards (Total ARR, SLA sparklines)\n• Interactive Area Chart (Workspace throughput)\n• Operational Grid (Workflows with colored status badges)"
            },
            {
                heading: "Accessibility Focus",
                text: "All text sizes and color contrast ratios comply with WCAG 2.1 AA guidelines, ensuring the interface is usable for employees with visual challenges."
            }
        ],
        kpis: {
            title: "Performance & Usability",
            desc: "High-density layouts with clear visual signals increase user processing speeds and lower database query loads through smart pagination."
        }
    },
    10: {
        title: "05. Implementation Roadmap",
        subtitle: "Continuous Delivery & Validation",
        sections: [
            {
                heading: "The 5-Phase Implementation",
                text: "1. Research & Discovery (Audit)\n2. UX Definition (IA & mapping)\n3. Prototyping (Figma components)\n4. Testing (SUS & speed metrics)\n5. Deployment (Engineering handoff)"
            },
            {
                heading: "Engineering Alignment",
                text: "Develop a shared component library in code matching Figma tokens, reducing development times and ensuring pixel-perfect layout matches."
            },
            {
                heading: "Continuous Optimization",
                text: "Use product analytics and feedback loops to continuously identify and resolve operational bottlenecks after launch."
            }
        ],
        kpis: {
            title: "Project Delivery Target",
            desc: "Full rollout across global operational centers in 6 months, targeting a 45% increase in operational speeds within 90 days post-launch."
        }
    }
};

// ==========================================================================
// APPLICATION CONTROLLER STATE
// ==========================================================================
const AppState = {
    currentScreen: 1,
    totalScreens: 10,
    viewMode: 'present', // 'present' or 'canvas'
    
    // Zoom/Pan settings for Figma Canvas
    canvas: {
        zoom: 0.25,
        panX: 0,
        panY: 0,
        isDragging: false,
        startX: 0,
        startY: 0
    },
    
    // Presentation View settings
    presentScale: 1
};

// ==========================================================================
// DOM ELEMENT REFERENCES
// ==========================================================================
const DOM = {
    appShell: document.getElementById('app-shell'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    screenDropdown: document.getElementById('screen-dropdown'),
    screenCounter: document.getElementById('screen-counter'),
    modePresent: document.getElementById('mode-present'),
    modeCanvas: document.getElementById('mode-canvas'),
    zoomOut: document.getElementById('zoom-out'),
    zoomIn: document.getElementById('zoom-in'),
    zoomReset: document.getElementById('zoom-reset'),
    zoomIndicator: document.getElementById('zoom-indicator'),
    strategySidebar: document.getElementById('strategy-sidebar'),
    toggleSidebarBtn: document.getElementById('toggle-sidebar-btn'),
    strategyDetails: document.getElementById('strategy-details'),
    viewport: document.getElementById('workspace-viewport'),
    canvasBoard: document.getElementById('canvas-board'),
    screens: document.querySelectorAll('.ux-screen')
};

// ==========================================================================
// APPLICATION FUNCTIONS
// ==========================================================================

/**
 * Initializes the application: event listeners, first slide load, diagram layouts.
 */
function init() {
    setupEventListeners();
    goToScreen(1);
    
    // Slight timeout to let DOM render before calculating connection lines
    setTimeout(() => {
        drawStakeholderConnections();
        centerCanvasBoard();
    }, 200);
}

/**
 * Attaches UI event listeners for buttons, canvas mouse interactions, and window resizing.
 */
function setupEventListeners() {
    // Navigation
    DOM.prevBtn.addEventListener('click', navigatePrevious);
    DOM.nextBtn.addEventListener('click', navigateNext);
    DOM.screenDropdown.addEventListener('change', (e) => {
        goToScreen(parseInt(e.target.value));
    });
    
    // View Modes
    DOM.modePresent.addEventListener('click', () => switchViewMode('present'));
    DOM.modeCanvas.addEventListener('click', () => switchViewMode('canvas'));
    
    // Zoom Controls
    DOM.zoomIn.addEventListener('click', () => adjustZoom(0.05));
    DOM.zoomOut.addEventListener('click', () => adjustZoom(-0.05));
    DOM.zoomReset.addEventListener('click', resetZoom);
    
    // Sidebar Controls
    DOM.toggleSidebarBtn.addEventListener('click', toggleSidebar);
    
    // Window Resize Event
    window.addEventListener('resize', handleWindowResize);
    
    // Canvas Mouse / Pan Controls
    DOM.viewport.addEventListener('mousedown', startCanvasDrag);
    window.addEventListener('mousemove', dragCanvas);
    window.addEventListener('mouseup', stopCanvasDrag);
    DOM.viewport.addEventListener('wheel', handleCanvasWheel, { passive: false });
    
    // Setup interactive card triggers
    setupInteractiveCards();
}

/**
 * Navigates to the previous screen.
 */
function navigatePrevious() {
    if (AppState.currentScreen > 1) {
        goToScreen(AppState.currentScreen - 1);
    }
}

/**
 * Navigates to the next screen.
 */
function navigateNext() {
    if (AppState.currentScreen < AppState.totalScreens) {
        goToScreen(AppState.currentScreen + 1);
    }
}

/**
 * Navigates to a specific screen.
 */
function goToScreen(index) {
    if (index >= 1 && index <= AppState.totalScreens) {
        // Remove active class from old slide
        const oldSlide = document.querySelector('.ux-screen.active-slide');
        if (oldSlide) oldSlide.classList.remove('active-slide');
        
        AppState.currentScreen = index;
        
        // Add active class to new slide
        const newSlide = document.getElementById(`screen-${index}`);
        if (newSlide) newSlide.classList.add('active-slide');
        
        // Update selection controls
        DOM.screenDropdown.value = index;
        DOM.screenCounter.textContent = `${index} / ${AppState.totalScreens}`;
        
        updateScreenView();
        
        // If in canvas mode, focus camera on focused screen
        if (AppState.viewMode === 'canvas') {
            focusCanvasOnScreen(index);
        }
    }
}

/**
 * Strategic notes panel updater. Loads and renders notes for the active screen.
 */
function updateStrategyNotes() {
    const data = STRATEGY_RESOURCES[AppState.currentScreen];
    if (!data) return;
    
    let html = `
        <div class="strategy-meta-block">
            <span class="badge">Screen ${AppState.currentScreen} / 10</span>
            <h3>${data.title}</h3>
            <p class="subtitle">${data.subtitle}</p>
        </div>
    `;
    
    data.sections.forEach(sec => {
        html += `
            <div class="strategy-section">
                <h4>${sec.heading}</h4>
                <p>${sec.text.replace(/\n/g, '<br>')}</p>
            </div>
        `;
    });
    
    if (data.kpis) {
        html += `
            <div class="kpi-target-box">
                <h5>${data.kpis.title}</h5>
                <p>${data.kpis.desc}</p>
            </div>
        `;
    }
    
    DOM.strategyDetails.innerHTML = html;
}

/**
 * Renders the screen according to the view mode (Presentation vs Canvas).
 */
function updateScreenView() {
    updateStrategyNotes();
    
    if (AppState.viewMode === 'present') {
        DOM.appShell.classList.remove('canvas-mode');
        DOM.appShell.classList.add('presentation-mode');
        
        // Clear board-level transforms
        DOM.canvasBoard.style.transform = '';
        DOM.canvasBoard.style.left = '0';
        DOM.canvasBoard.style.top = '0';
        
        // Calculate fit-scale transformation for the current slide
        calculatePresentationScale();
    } else {
        DOM.appShell.classList.remove('presentation-mode');
        DOM.appShell.classList.add('canvas-mode');
        
        // Clear individual slide transforms
        DOM.screens.forEach(screen => {
            screen.style.transform = '';
        });
        
        // Update Canvas Board transforms
        updateCanvasTransforms();
    }
}

/**
 * Switching view modes between Slide Presentation and Figma Board layout.
 */
function switchViewMode(mode) {
    if (mode === 'present' || mode === 'canvas') {
        AppState.viewMode = mode;
        
        if (mode === 'present') {
            DOM.modePresent.classList.add('active');
            DOM.modeCanvas.classList.remove('active');
            // Reset sidebar open when presenting
            DOM.strategySidebar.classList.remove('collapsed');
        } else {
            DOM.modeCanvas.classList.add('active');
            DOM.modePresent.classList.remove('active');
            // Open sidebar by default in canvas mode for information
            DOM.strategySidebar.classList.remove('collapsed');
            
            // Set zoom to display the overall board
            AppState.canvas.zoom = 0.15;
            focusCanvasOnScreen(AppState.currentScreen);
        }
        
        updateScreenView();
        
        // Re-draw connection lines in case shapes shifted
        setTimeout(drawStakeholderConnections, 200);
    }
}

/**
 * Calculates scale transform for Presentation Mode to fit screen while maintaining 1440x1024.
 */
function calculatePresentationScale() {
    if (AppState.viewMode !== 'present') return;
    
    const activeSlide = document.querySelector('.ux-screen.active-slide');
    if (!activeSlide) return;
    
    // Get viewport dimensions minus side panels and bars
    const viewWidth = DOM.viewport.clientWidth;
    const viewHeight = DOM.viewport.clientHeight;
    
    // Subtract padding margins (60px total padding)
    const targetWidth = viewWidth - 80;
    const targetHeight = viewHeight - 80;
    
    // Calculate aspect ratios
    const scaleX = targetWidth / 1440;
    const scaleY = targetHeight / 1024;
    
    // Use smaller scale factor to prevent cropping
    const scale = Math.min(scaleX, scaleY, 1.2); // Cap zoom at 120%
    AppState.presentScale = scale;
    
    // Apply transform centering slide
    activeSlide.style.transform = `translate(-50%, -50%) scale(${scale})`;
    
    // Update zoom counter display
    DOM.zoomIndicator.textContent = `${Math.round(scale * 100)}%`;
}

/**
 * Collapse/Expand control for the strategic insights sidebar.
 */
function toggleSidebar() {
    DOM.strategySidebar.classList.toggle('collapsed');
    // Recalculate dimensions on transition completion
    setTimeout(() => {
        if (AppState.viewMode === 'present') {
            calculatePresentationScale();
        }
    }, 300);
}

/**
 * Adapts interface scale on browser resize.
 */
function handleWindowResize() {
    if (AppState.viewMode === 'present') {
        calculatePresentationScale();
    }
    // Re-draw connections overlay
    drawStakeholderConnections();
}

// ==========================================================================
// FIGMA CANVAS PANNING AND ZOOMING MOTOR
// ==========================================================================

/**
 * Starts mouse dragging on the Figma board container.
 */
function startCanvasDrag(e) {
    if (AppState.viewMode !== 'canvas') return;
    // Don't drag if clicking buttons, select tools, inputs, or interactive nodes
    if (e.target.closest('button') || e.target.closest('select') || e.target.closest('input') || e.target.closest('.stakeholder-node') || e.target.closest('.persona-card')) {
        return;
    }
    
    AppState.canvas.isDragging = true;
    AppState.canvas.startX = e.clientX - AppState.canvas.panX;
    AppState.canvas.startY = e.clientY - AppState.canvas.panY;
    DOM.canvasBoard.style.cursor = 'grabbing';
}

/**
 * Performs panning translate calculations.
 */
function dragCanvas(e) {
    if (!AppState.canvas.isDragging || AppState.viewMode !== 'canvas') return;
    
    AppState.canvas.panX = e.clientX - AppState.canvas.startX;
    AppState.canvas.panY = e.clientY - AppState.canvas.startY;
    
    updateCanvasTransforms();
}

/**
 * Terminates canvas dragging.
 */
function stopCanvasDrag() {
    if (AppState.viewMode !== 'canvas') return;
    AppState.canvas.isDragging = false;
    DOM.canvasBoard.style.cursor = 'grab';
}

/**
 * Handles mousewheel zooming on mouse cursor location.
 */
function handleCanvasWheel(e) {
    if (AppState.viewMode !== 'canvas') return;
    e.preventDefault();
    
    const zoomFactor = 0.05;
    const oldZoom = AppState.canvas.zoom;
    let newZoom = oldZoom;
    
    if (e.deltaY < 0) {
        newZoom = Math.min(oldZoom + zoomFactor, 2.0); // max 200%
    } else {
        newZoom = Math.max(oldZoom - zoomFactor, 0.05); // min 5%
    }
    
    // Zoom centering calculations
    const rect = DOM.viewport.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Adjust pan coordinates so mouse position remains steady under zoom
    AppState.canvas.panX = mouseX - (mouseX - AppState.canvas.panX) * (newZoom / oldZoom);
    AppState.canvas.panY = mouseY - (mouseY - AppState.canvas.panY) * (newZoom / oldZoom);
    AppState.canvas.zoom = newZoom;
    
    updateCanvasTransforms();
}

/**
 * Multiplier adjusts zoom setting.
 */
function adjustZoom(amount) {
    if (AppState.viewMode === 'canvas') {
        const oldZoom = AppState.canvas.zoom;
        const newZoom = Math.max(Math.min(oldZoom + amount, 2.0), 0.05);
        
        // Zoom centering around viewport center
        const viewCenterX = DOM.viewport.clientWidth / 2;
        const viewCenterY = DOM.viewport.clientHeight / 2;
        
        AppState.canvas.panX = viewCenterX - (viewCenterX - AppState.canvas.panX) * (newZoom / oldZoom);
        AppState.canvas.panY = viewCenterY - (viewCenterY - AppState.canvas.panY) * (newZoom / oldZoom);
        AppState.canvas.zoom = newZoom;
        
        updateCanvasTransforms();
    } else {
        // Simple presentation scale adjustment
        AppState.presentScale = Math.max(Math.min(AppState.presentScale + amount, 2.0), 0.2);
        const activeSlide = document.querySelector('.ux-screen.active-slide');
        if (activeSlide) {
            activeSlide.style.transform = `translate(-50%, -50%) scale(${AppState.presentScale})`;
            DOM.zoomIndicator.textContent = `${Math.round(AppState.presentScale * 100)}%`;
        }
    }
}

/**
 * Resets view back to standard scale.
 */
function resetZoom() {
    if (AppState.viewMode === 'canvas') {
        AppState.canvas.zoom = 0.25;
        focusCanvasOnScreen(AppState.currentScreen);
    } else {
        calculatePresentationScale();
    }
}

/**
 * Updates CSS values with translation coordinates on the HTML Figma board container.
 */
function updateCanvasTransforms() {
    DOM.canvasBoard.style.transform = `translate(${AppState.canvas.panX}px, ${AppState.canvas.panY}px) scale(${AppState.canvas.zoom})`;
    DOM.zoomIndicator.textContent = `${Math.round(AppState.canvas.zoom * 100)}%`;
}

/**
 * Focuses Figma viewport camera to center on a target screen.
 */
function focusCanvasOnScreen(index) {
    const screenEl = document.getElementById(`screen-${index}`);
    if (!screenEl || AppState.viewMode !== 'canvas') return;
    
    // Read absolute grid coordinates of screen inside canvas
    const screenLeft = parseInt(screenEl.style.left) || 0;
    const screenTop = parseInt(screenEl.style.top) || 0;
    
    // Find viewport center
    const viewWidth = DOM.viewport.clientWidth;
    const viewHeight = DOM.viewport.clientHeight;
    
    // Apply panning calculations (shifting viewport so target centers)
    AppState.canvas.panX = (viewWidth / 2) - (screenLeft + (1440 / 2)) * AppState.canvas.zoom;
    AppState.canvas.panY = (viewHeight / 2) - (screenTop + (1024 / 2)) * AppState.canvas.zoom;
    
    updateCanvasTransforms();
}

/**
 * Initial viewport center alignment calculation on start.
 */
function centerCanvasBoard() {
    if (AppState.viewMode !== 'canvas') return;
    focusCanvasOnScreen(1);
}

// ==========================================================================
// INTERACTIVE GRAPHICS DRAWING ENGINE
// ==========================================================================

/**
 * Draw connecting pathways between center SaaS hub and outer stakeholders.
 */
function drawStakeholderConnections() {
    const svg = document.getElementById('stakeholder-connections');
    if (!svg) return;
    
    // Empty old content
    svg.innerHTML = '';
    
    const hub = document.getElementById('stakeholder-hub');
    const nodes = document.querySelectorAll('.stakeholder-node');
    if (!hub || nodes.length === 0) return;
    
    // Determine center hub position inside wrapper relative coordinates
    const wrapperRect = svg.getBoundingClientRect();
    if (wrapperRect.width === 0) return; // Prevent calculations on hidden elements
    
    const hubCenterX = hub.offsetLeft + (hub.clientWidth / 2);
    const hubCenterY = hub.offsetTop + (hub.clientHeight / 2);
    
    nodes.forEach(node => {
        const nodeCenterX = node.offsetLeft + (node.clientWidth / 2);
        const nodeCenterY = node.offsetTop + (node.clientHeight / 2);
        
        // Create SVG line
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', hubCenterX);
        line.setAttribute('y1', hubCenterY);
        line.setAttribute('x2', nodeCenterX);
        line.setAttribute('y2', nodeCenterY);
        line.setAttribute('stroke', '#E2E8F0');
        line.setAttribute('stroke-width', '2');
        line.setAttribute('id', `line-${node.id}`);
        line.style.transition = 'stroke 0.3s ease, stroke-width 0.3s ease';
        
        svg.appendChild(line);
    });
}

/**
 * Setup hover and click triggers for cards (Personas, Stakeholders, Dashboard tabs).
 */
function setupInteractiveCards() {
    // Screen 3: Stakeholders node highlight
    const nodes = document.querySelectorAll('.stakeholder-node');
    nodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
            const line = document.getElementById(`line-${node.id}`);
            if (line) {
                line.setAttribute('stroke', '#10B981');
                line.setAttribute('stroke-width', '4');
            }
        });
        
        node.addEventListener('mouseleave', () => {
            const line = document.getElementById(`line-${node.id}`);
            if (line && !node.classList.contains('active-node')) {
                line.setAttribute('stroke', '#E2E8F0');
                line.setAttribute('stroke-width', '2');
            }
        });
        
        node.addEventListener('click', () => {
            // Remove active from others
            nodes.forEach(n => {
                n.classList.remove('active-node');
                const ln = document.getElementById(`line-${n.id}`);
                if (ln) {
                    ln.setAttribute('stroke', '#E2E8F0');
                    ln.setAttribute('stroke-width', '2');
                }
            });
            
            node.classList.add('active-node');
            const line = document.getElementById(`line-${node.id}`);
            if (line) {
                line.setAttribute('stroke', '#14B8A6');
                line.setAttribute('stroke-width', '4');
            }
            
            // Highlight stakeholder detail text in sidebar
            const role = node.querySelector('h4').textContent;
            const desc = node.querySelector('p').textContent;
            
            const strategySection = document.querySelector('.strategy-section:nth-of-type(2)');
            if (strategySection) {
                strategySection.querySelector('h4').textContent = `Focused Stakeholder: ${role}`;
                strategySection.querySelector('p').innerHTML = `<strong>Role Focus:</strong> ${desc}<br><br>Strategic metrics focus on addressing this user group's operational constraints during workflow consolidations.`;
            }
        });
    });
    
    // Screen 5: Persona Card Tabs
    const personaCards = document.querySelectorAll('.persona-card');
    personaCards.forEach(card => {
        card.addEventListener('click', () => {
            personaCards.forEach(c => c.classList.remove('active-persona'));
            card.classList.add('active-persona');
            
            // Update sidebar content details dynamically to highlight selected persona
            const name = card.querySelector('h3').textContent;
            const role = card.querySelector('.persona-role').textContent;
            const goal = card.querySelector('.persona-field:nth-of-type(1) p').textContent;
            const pain = card.querySelector('.persona-field:nth-of-type(2) p').textContent;
            
            const strategySection = document.querySelector('.strategy-section:nth-of-type(2)');
            if (strategySection && AppState.currentScreen === 5) {
                strategySection.querySelector('h4').textContent = `Persona Spotlight: ${name}`;
                strategySection.querySelector('p').innerHTML = `
                    <strong>Role:</strong> ${role}<br>
                    <strong>Core Goal:</strong> ${goal}<br>
                    <strong>Key Bottleneck:</strong> ${pain}<br><br>
                    Redesigned templates establish specific optimization widgets mapping to these unique behaviors.
                `;
            }
        });
    });
    
    // Screen 9: Mock Dashboard Alert toggle popup
    const alertToggle = document.getElementById('db-alert-toggle');
    if (alertToggle) {
        alertToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            alert('AeroFlow Notification Center:\n1. Alert: High Task Latency peaked at 1.8s (Triage Operations)\n2. Dispatch exception raised by Michael Torres\n3. Scheduled report generation complete');
        });
    }
}

// ==========================================================================
// RUN APPLICATION
// ==========================================================================
window.addEventListener('DOMContentLoaded', init);
