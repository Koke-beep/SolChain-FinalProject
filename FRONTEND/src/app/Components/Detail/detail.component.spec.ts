import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DetailComponent } from './detail.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import {DashboardService} from '../../core/Services/dashboard.service',

describe('DetailComponent', () => {
  let component: DetailComponent
  let fixture: ComponentFixture<DetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DetailComponent],
      providers: [DashboardService],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
