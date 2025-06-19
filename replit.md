# Terry's Personal Training Website

## Overview

This is a full-stack web application for Terry's Personal Training business, built with a modern tech stack featuring React frontend, Express.js backend, and PostgreSQL database. The application showcases Terry's 30 years of professional fitness coaching experience through a sleek, dark-themed landing page designed to attract potential clients.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom dark theme featuring gold accents
- **UI Components**: Shadcn/ui component library for consistent design
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: Express sessions with PostgreSQL store
- **Middleware**: Custom logging, error handling, and request processing

### Database Design
- **Database**: PostgreSQL 16
- **Schema Management**: Drizzle Kit for migrations and schema evolution
- **Current Schema**: User management system with username/password authentication
- **Storage Layer**: Abstracted storage interface supporting both in-memory and database implementations

## Key Components

### Frontend Components
- **Landing Page**: Single-page application with hero section, about, services, testimonials, and contact
- **Header**: Fixed navigation with smooth scrolling to sections
- **Hero**: Eye-catching banner with ratings and call-to-action
- **Services**: Grid layout showcasing 6 training specialties
- **Testimonials**: Client feedback with professional presentation
- **Cookie Banner**: GDPR-compliant cookie consent management

### Backend Components
- **Route Registration**: Centralized API route management
- **Storage Interface**: Abstracted CRUD operations for scalability
- **Development Server**: Vite integration for hot reloading
- **Static File Serving**: Production-ready asset delivery

### Shared Components
- **Schema Definitions**: Type-safe database models using Drizzle and Zod
- **Type Safety**: End-to-end TypeScript for reliable development

## Data Flow

1. **Client Requests**: Browser requests routed through Vite dev server or Express in production
2. **API Calls**: Frontend uses TanStack Query for server communication
3. **Database Operations**: Express routes use storage interface for data persistence
4. **Response Handling**: Standardized JSON responses with error handling
5. **State Updates**: Client-side state synchronized with server via React Query

## External Dependencies

### Core Dependencies
- **Database**: Neon serverless PostgreSQL for scalable data storage
- **UI Framework**: Radix UI primitives for accessible components
- **Validation**: Zod for runtime type checking and form validation
- **Date Handling**: date-fns for consistent date operations

### Development Tools
- **Build Pipeline**: ESBuild for server bundling, Vite for client builds
- **Type Checking**: TypeScript compiler for static analysis
- **CSS Processing**: PostCSS with Tailwind for optimized styling

## Deployment Strategy

### Production Build
- **Client**: Vite builds optimized React bundle to `dist/public`
- **Server**: ESBuild bundles Express server to `dist/index.js`
- **Assets**: Static files served from build directory

### Environment Configuration
- **Development**: `npm run dev` starts Vite dev server with Express backend
- **Production**: `npm run start` serves built application
- **Database**: Drizzle migrations applied via `npm run db:push`

### Hosting Platform
- **Target**: Replit autoscale deployment
- **Port Configuration**: Local port 5000 mapped to external port 80
- **Environment**: PostgreSQL 16 module provisioned automatically

## Changelog

Changelog:
- June 19, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.