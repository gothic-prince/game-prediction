import UnitEntity from '../../../src/Entities/Units/UnitEntity';
describe('UnitEntity', () => {
  const entity = new UnitEntity(1, 20)
  it('should return 1', () => {
    expect(entity.getID()).toBe(1)
  })
  it('should return 20', () => {
    expect(entity.getTotal()).toBe(20)
  })
  it('should return [20]', () => {
    expect(entity.toArray()[0]).toBe(20)
  })
})
