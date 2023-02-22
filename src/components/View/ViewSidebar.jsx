/* External dependencies */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/* Internal dependencies */
import Note from '../../Image_Assets/Pfeifer_Note_Black.png'

/** Side navigation bar for view page */
const ViewSidebar = (props) => {
    const location = useLocation();
    
    return (
        <div className='page-sidebar content-sidebar unselectable'>
            <Link 
                to='/view/general' 
                style={{ textDecoration: 'none' }} 
                onClick={ props.closeVideoOpen }
                className={ "view-general-reel " + (location.pathname === '/view/general' ?
                    "selected-sidebar-content-link" : "unselected-sidebar-content-link")
                }
            >
                <img 
                    src={ Note } 
                    style={{
                        marginBottom: "1.5%"
                    }}
                    className={ location.pathname === '/view/general' ? 
                        "content-sidebar-note-selected" : "content-sidebar-note" 
                    } 
                    alt='Music Note'
                />
                <p 
                    style={{
                        marginBottom: "1.5%"
                    }}
                    className={ location.pathname === '/view/general' ? 
                    "content-sidebar-title-selected" : "content-sidebar-title" 
                    }
                >
                    general reel
                </p>
            </Link>
            
            <hr 
                className='content-sidebar-hr'
            />

            <Link 
                to='/view/contemporary' 
                style={{ textDecoration: 'none' }} 
                onClick={ props.closeVideoOpen }
                className={ "view-contemporary " + (location.pathname === '/view/contemporary' ?
                    "selected-sidebar-content-link" : "unselected-sidebar-content-link")
                }
            >
                <img 
                    src={ Note } 
                    className={ location.pathname === '/view/contemporary' ? 
                        "content-sidebar-note-selected" : "content-sidebar-note" 
                    } 
                    alt='Note'
                />

                <p 
                    className={ location.pathname === '/view/contemporary' ? 
                    "content-sidebar-text-selected" : "content-sidebar-text" 
                    }
                >
                    contemporary scores
                </p>
            </Link>

            <Link 
                to='/view/humor' 
                style={{ textDecoration: 'none' }} 
                onClick={ props.closeVideoOpen }
                className={ "view-humor " + (location.pathname === '/view/humor' ?
                    "selected-sidebar-content-link" : "unselected-sidebar-content-link")
                }
            >
                <img 
                    src={ Note } 
                    className={ location.pathname === '/view/humor' ? 
                        "content-sidebar-note-selected" : "content-sidebar-note" 
                    }
                    alt='Note'
                />

                <p 
                    className={ location.pathname === '/view/humor' ? 
                    "content-sidebar-text-selected" : "content-sidebar-text" 
                    }
                >
                    humor
                </p>
            </Link>

            <Link 
                to='/view/moods' 
                style={{ textDecoration: 'none' }} 
                onClick={ props.closeVideoOpen }
                className={ "view-moods " + (location.pathname === '/view/moods' ?
                    "selected-sidebar-content-link" : "unselected-sidebar-content-link")
                }
            >
                <img 
                    src={ Note } 
                    className={ location.pathname === '/view/moods' ? 
                        "content-sidebar-note-selected" : "content-sidebar-note" 
                    }
                    alt='Note'
                />

                <p 
                    className={ location.pathname === '/view/moods' ? 
                    "content-sidebar-text-selected" : "content-sidebar-text" 
                    }
                >
                    moods
                </p>
            </Link>

            <Link 
                to='/view/orchestral' 
                style={{ textDecoration: 'none' }} 
                onClick={ props.closeVideoOpen }
                className={ "view-orchestral " + (location.pathname === '/view/orchestral' ?
                    "selected-sidebar-content-link" : "unselected-sidebar-content-link")
                }
            >
                <img 
                    src={ Note } 
                    className={ location.pathname === '/view/orchestral' ? 
                        "content-sidebar-note-selected" : "content-sidebar-note" 
                    }
                    alt='Note'
                />

                <p 
                    className={ location.pathname === '/view/orchestral' ? 
                    "content-sidebar-text-selected" : "content-sidebar-text" 
                    }
                >
                    orchestral
                </p>
            </Link>

            <Link 
                to='/view/spanish' 
                style={{ textDecoration: 'none' }} 
                onClick={ props.closeVideoOpen }
                className={ "view-spanish " + (location.pathname === '/view/spanish' ?
                    "selected-sidebar-content-link" : "unselected-sidebar-content-link")
                }
            >
                <img 
                    src={ Note } 
                    className={ location.pathname === '/view/spanish' ? 
                        "content-sidebar-note-selected" : "content-sidebar-note" 
                    }
                    alt='Note'
                />

                <p 
                    className={ location.pathname === '/view/spanish' ? 
                    "content-sidebar-text-selected" : "content-sidebar-text" 
                    }
                >
                    spanish market
                </p>
            </Link>
        </div>
    )
}

export default ViewSidebar;