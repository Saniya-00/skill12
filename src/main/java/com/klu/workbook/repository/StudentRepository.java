package com.klu.workbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.klu.workbook.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
}