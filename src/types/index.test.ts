import { describe, it, expect } from 'vitest';
import type {
  ContactChannel,
  Education,
  Experience,
  Gallery,
  GalleryPropsType,
  Skill,
  Project,
  SoftwareSkill,
  Certificate,
} from './index';

describe('Type Definitions', () => {
  describe('ContactChannel', () => {
    it('should accept valid ContactChannel with URL', () => {
      const contact: ContactChannel = {
        src: 'github',
        via: 'username',
        url: 'https://github.com/username',
      };

      expect(contact.src).toBe('github');
      expect(contact.via).toBe('username');
      expect(contact.url).toBe('https://github.com/username');
    });

    it('should accept valid ContactChannel without URL', () => {
      const contact: ContactChannel = {
        src: 'email',
        via: 'test@example.com',
      };

      expect(contact.src).toBe('email');
      expect(contact.via).toBe('test@example.com');
      expect(contact.url).toBeUndefined();
    });
  });

  describe('Education', () => {
    it('should accept valid Education object', () => {
      const education: Education = {
        id: 1,
        year: '2020-2024',
        place: 'University Name',
      };

      expect(education.id).toBe(1);
      expect(education.year).toBe('2020-2024');
      expect(education.place).toBe('University Name');
    });
  });

  describe('Experience', () => {
    it('should accept valid Experience object', () => {
      const experience: Experience = {
        period: '2023 - Present',
        position: 'Developer',
        place: 'Company',
        work: ['Task 1', 'Task 2'],
      };

      expect(experience.period).toBe('2023 - Present');
      expect(experience.position).toBe('Developer');
      expect(experience.place).toBe('Company');
      expect(experience.work).toHaveLength(2);
    });

    it('should accept Experience with empty work array', () => {
      const experience: Experience = {
        period: '2023',
        position: 'Intern',
        place: 'Company',
        work: [],
      };

      expect(experience.work).toHaveLength(0);
    });
  });

  describe('Gallery', () => {
    it('should accept valid Gallery object', () => {
      const gallery: Gallery = {
        src: '/image.jpg',
      };

      expect(gallery.src).toBe('/image.jpg');
    });
  });

  describe('GalleryPropsType', () => {
    it('should accept valid GalleryPropsType', () => {
      const props: GalleryPropsType = {
        data: [{ src: '/image1.jpg' }, { src: '/image2.jpg' }],
        id: 'gallery-1',
        isVisible: true,
      };

      expect(props.data).toHaveLength(2);
      expect(props.id).toBe('gallery-1');
      expect(props.isVisible).toBe(true);
    });

    it('should accept GalleryPropsType with optional fields undefined', () => {
      const props: GalleryPropsType = {
        data: [],
        id: 'gallery-2',
      };

      expect(props.isVisible).toBeUndefined();
      expect(props.ref).toBeUndefined();
    });
  });

  describe('Skill', () => {
    it('should accept valid Skill object', () => {
      const skill: Skill = {
        name: 'React',
        url: 'https://react.dev',
      };

      expect(skill.name).toBe('React');
      expect(skill.url).toBe('https://react.dev');
    });
  });

  describe('Project', () => {
    it('should accept Project with available status', () => {
      const project: Project = {
        name: 'My Project',
        url: 'https://example.com',
        cover: '/cover.png',
        stack: ['react', 'typescript'],
        description: 'A great project',
        status: 'available',
        updateDate: Date.now(),
      };

      expect(project.status).toBe('available');
      expect(project.stack).toHaveLength(2);
    });

    it('should accept Project with under maintenance status', () => {
      const project: Project = {
        name: 'My Project',
        url: 'https://example.com',
        cover: '/cover.png',
        stack: [],
        description: 'A great project',
        status: 'under maintenance',
        updateDate: Date.now(),
      };

      expect(project.status).toBe('under maintenance');
    });

    it('should accept Project with coming soon status', () => {
      const project: Project = {
        name: 'My Project',
        url: 'https://example.com',
        cover: '',
        stack: ['vue'],
        description: '',
        status: 'coming soon',
        updateDate: Date.now(),
      };

      expect(project.status).toBe('coming soon');
    });
  });

  describe('SoftwareSkill', () => {
    it('should accept valid SoftwareSkill object', () => {
      const softwareSkill: SoftwareSkill = {
        name: 'Frontend',
        skills: [
          { name: 'React', url: 'https://react.dev' },
          { name: 'Vue', url: 'https://vuejs.org' },
        ],
      };

      expect(softwareSkill.name).toBe('Frontend');
      expect(softwareSkill.skills).toHaveLength(2);
    });

    it('should accept SoftwareSkill with empty skills array', () => {
      const softwareSkill: SoftwareSkill = {
        name: 'Backend',
        skills: [],
      };

      expect(softwareSkill.skills).toHaveLength(0);
    });
  });

  describe('Certificate', () => {
    it('should accept valid Certificate object', () => {
      const certificate: Certificate = {
        name: 'TOEIC',
        score: 850,
        maxScroe: 990,
        date: '01/01/2024',
      };

      expect(certificate.name).toBe('TOEIC');
      expect(certificate.score).toBe(850);
      expect(certificate.maxScroe).toBe(990);
      expect(certificate.date).toBe('01/01/2024');
    });

    it('should accept Certificate with zero scores', () => {
      const certificate: Certificate = {
        name: 'Invalid',
        score: 0,
        maxScroe: 0,
        date: '0',
      };

      expect(certificate.score).toBe(0);
      expect(certificate.maxScroe).toBe(0);
    });
  });
});