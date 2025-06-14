import { render, fireEvent } from '@testing-library/react-native';
import { QualityScore } from '../../components/QualityScore';

describe('QualityScore Component', () => {
  // Rendering tests
  it('renders correctly with high score', () => {
    const { getByText, getByTestId } = render(
      <QualityScore score={85} type="business" testID="quality-score" />
    );
    
    expect(getByText('85')).toBeTruthy();
    expect(getByText('Quality Score')).toBeTruthy();
    expect(getByText('Based on community feedback and verification status')).toBeTruthy();
    expect(getByTestId('quality-score')).toBeTruthy();
  });

  // Score range tests
  describe('score ranges', () => {
    const testCases = [
      { score: 95, expectedColor: '#10B98115', category: 'high' },
      { score: 80, expectedColor: '#10B98115', category: 'high' },
      { score: 75, expectedColor: '#F59E0B15', category: 'medium' },
      { score: 60, expectedColor: '#F59E0B15', category: 'medium' },
      { score: 45, expectedColor: '#EF444415', category: 'low' },
      { score: 20, expectedColor: '#EF444415', category: 'low' },
    ];

    testCases.forEach(({ score, expectedColor, category }) => {
      it(`displays correct color scheme for ${category} score: ${score}`, () => {
        const { getByTestId } = render(
          <QualityScore score={score} type="business" testID="score-container" />
        );
        
        const container = getByTestId('score-container');
        expect(container.props.style).toContainEqual(
          expect.objectContaining({
            backgroundColor: expectedColor
          })
        );
      });
    });
  });

  // Icon tests
  describe('score icons', () => {
    it('shows CheckCircle icon for high scores', () => {
      const { getByTestId } = render(
        <QualityScore score={85} type="business" />
      );
      expect(getByTestId('check-circle-icon')).toBeTruthy();
    });

    it('shows Star icon for medium scores', () => {
      const { getByTestId } = render(
        <QualityScore score={65} type="business" />
      );
      expect(getByTestId('star-icon')).toBeTruthy();
    });

    it('shows AlertTriangle icon for low scores', () => {
      const { getByTestId } = render(
        <QualityScore score={45} type="business" />
      );
      expect(getByTestId('alert-triangle-icon')).toBeTruthy();
    });
  });

  // Organization type tests
  describe('organization types', () => {
    const types = ['business', 'organization'] as const;
    
    types.forEach(type => {
      it(`handles ${type} type correctly`, () => {
        const { getByTestId } = render(
          <QualityScore score={85} type={type} testID="quality-score" />
        );
        expect(getByTestId('quality-score')).toBeTruthy();
      });
    });
  });

  // Edge cases
  describe('edge cases', () => {
    it('handles score of 0', () => {
      const { getByText } = render(
        <QualityScore score={0} type="business" />
      );
      expect(getByText('0')).toBeTruthy();
    });

    it('handles score of 100', () => {
      const { getByText } = render(
        <QualityScore score={100} type="business" />
      );
      expect(getByText('100')).toBeTruthy();
    });
  });

  // Accessibility tests
  describe('accessibility', () => {
    it('has accessible labels', () => {
      const { getByLabelText } = render(
        <QualityScore score={85} type="business" />
      );
      expect(getByLabelText('Quality Score: 85')).toBeTruthy();
    });
  });

  // Style tests
  describe('style properties', () => {
    it('applies correct text styles', () => {
      const { getByTestId } = render(
        <QualityScore score={85} type="business" />
      );
      
      const scoreText = getByTestId('score-text');
      expect(scoreText.props.style).toContainEqual(
        expect.objectContaining({
          fontFamily: 'SF-Pro-Text-Bold',
          fontSize: 24
        })
      );
    });

    it('applies correct container styles', () => {
      const { getByTestId } = render(
        <QualityScore score={85} type="business" />
      );
      
      const container = getByTestId('quality-score');
      expect(container.props.style).toContainEqual(
        expect.objectContaining({
          padding: 16,
          borderRadius: 12
        })
      );
    });
  });

  // Layout tests
  describe('layout structure', () => {
    it('maintains correct component hierarchy', () => {
      const { getByTestId } = render(
        <QualityScore score={85} type="business" />
      );
      
      const container = getByTestId('quality-score');
      const scoreContainer = getByTestId('score-container');
      const scoreText = getByTestId('score-text');
      
      expect(container).toBeTruthy();
      expect(scoreContainer).toBeTruthy();
      expect(scoreText).toBeTruthy();
    });
  });

  // Animation tests (if applicable)
  describe('animations', () => {
    it('applies animation styles correctly', () => {
      const { getByTestId } = render(
        <QualityScore score={85} type="business" />
      );
      
      const scoreContainer = getByTestId('score-container');
      expect(scoreContainer.props.style).toContainEqual(
        expect.objectContaining({
          transform: expect.any(Array)
        })
      );
    });
  });
});